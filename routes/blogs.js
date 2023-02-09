const { application } = require('express');
const express = require('express');
const router = express.Router();

const { validateBlogs } = require("../validation/blogs");
const {db} = require("../mongo")

/* GET users listing. */
router.get('/', async function(req, res, next) {
  
  const blogs = await db()
  .collection('Sample_Blog')
  .find({})
  .limit(5)
  .toArray()

  

    res.json({
      sucess:true,
      blogs: blogs
    });


});


router.get("/all", (req, res) => {
    res.json({sucess: true, route: "sampleBlogs", message:"list of all blogs",blogs:sampleBlogs});
});

router.get("/single/:title",function (req, res){
  const singleblog = sampleBlogs.find((blog)=>{
    return blog.title === req.params.title

  })
  res.json({
    success: true,
    blog: singleblog
  })
})

router.post("/blogs/create-one", (req, res)=>{
    if (req.body.blogTitle === undefined || typeof(req.body.blogTitle) !== "string"){
      res.json({
        success: false,
        message: "blog title is reqiured and must be a string"
      })
      return
    }
    if (req.body.blogText === undefined || typeof(req.body.blogText) !== "string"){
      res.json({
        success: false,
        message: "blog text is required and must be a string"
      })
      return 
    }
    if (req.body.blogAuthor === undefined || typeof(req.body.blogAuthor) !== "string"){
       res.json({
        success: false,
        message: "author is required and must be a string"
       })
       return 
    } 
      
     
     const blogTitle = req.body.blogTitle
     const blogText = req.body.blogText
     const blogAuthor = req.body.blogAuthor

     const sampleBlogData = {
      blogTitle: blogTitle,
      blogText: blogText,
      blogAuthor: blogAuthor,
      createdAt: new Date(),
      lastModified: new Date(),

     }

     sampleBlogs.push(sampleBlogData)

     res.json({
       success: true,
       
  

  })
   
  
  

      
    })

router.put('/update-one/:blogTitle', (req, res)=>{
    const sampleBlogToFind = req.params.blogTitle

    const originalBlog = blogs.find((blog)=>{

      return blog.title === sampleBlogToFind

     })

     const sampleBlogIndex = blogs.findIndex((blog)=>{

      return sampleBlogIndex === sampleBlogToFind
     })

     if (!originalBlog) {
      res.json({
        success: false,
        message: "blog not found"
      })
      return
    }
    const updatedBlog = {}
    
      if (req.body.title !== undefined){
        updatedBlog.title = req.body.title
      } else {
        updatedBlog.title = originalBlog.title
      }
    
      if (req.body.text !== undefined){
        updatedBlog.text = req.body.text
      } else {
        updatedBlog.text = originalBlog.text
      }
    
      if (req.body.author !== undefined){
        updatedBlog.author = req.body.author
      } else {
        updatedBlog.author = originalBlog.author
      }

      updatedBlog.createdAt = new Date
      updatedBlog.lastModified = new Date

      blogs[blogIndex] = updatedBlog

      console.log(blogs)
      res.json({
        success: true,
        updatedBlog: updatedBlog,
        blogs: blogs
        
      })
    })


  


router.delete("/delete/:title",function(req,res){
  const blogTitleToDelete = req.params.title
  const blogIndex = sampleBlogs.findIndex((blog)=>{
    return blog.title === blogTitleToDelete
  })
  sampleBlogs.splice(blogIndex, 1)

  res.json({
    success: true,
  })

})
  
  



module.exports = router;