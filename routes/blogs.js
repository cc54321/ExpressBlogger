const { application } = require('express');
const express = require('express');
const router = express.Router();

const { validateBlogs } = require("../validation/blogs");
const {db} = require("../mongo");
const { Db } = require('mongodb');

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


//  router.get("/all", (req, res) => {
//      res.json({sucess: true, route: "Sample-Blog", message:"list of all blogs",blogs:Sample-Blog});
//  });


 router.get('/all', async function(req, res, next) {

  const allBlogs = await db()
  .collection('sample_blog')
  .find({})
  .limit(5)
  .toArray(function (err, result) {
    });

    res.json({
      success: true,
      blogs: allBlogs
    });

});
// router.get("/all", (req, res) => {
//     res.json({sucess: true, route: "sampleBlogs", message:"list of all blogs",blogs:sampleBlogs});
// });

//router.get("/single/:title",function (req, res){
// router.get("/single/:title",function (req, res){
//   const singleblog = sampleBlogs.find((blog)=>{
//     return blog.title === req.params.title
    

//   })
//   res.json({
//     success: true,
//     blog: singleblog
//   })
// })



router.get('/get-one/:blogTitle', async function(req, res, next) {

  const blogPost = await db()
  .collection("Sample_Blog")
  .findOne({title: req.params.blogTitle,})

  

    res.json({
      sucess:true,
      blogs: blogTitle
    });


});
///get-one/:id (GET): returns one blog post given an id
router.get('/get-one/:id', async function(req, res, next) {

  const getId = await db()
  .collection("Sample_Blog")
  .findOne({id: req.params.id,})

  

    res.json({
      sucess:true,
      blogs: getId
    });

    

});

// router.get("get-one/:blogTitle",function (req, res){
//      const getOneBlog = sampleBlog.collection
//      const blogTitle = sampleBlog.find((blog)=>{
//       return blogTitle === req.params.title
//      })
   
//      res.json({
//            success: true,
//            blog: getOneBlog
//          })

// })

//create-one/ (POST): creates one blog post

router.post("/create-one/post", async function(req, res, next) {

     const blogPost = req.body.blogPost
     const blogTitle = req.body.blogTitle
     const blogText = req.body.blogText
     const blogAuthor = req.body.blogAuthor

      const BlogData = {
      blogTitle: blogTitle,
      blogText: blogText,
      blogAuthor: blogAuthor,
      createdAt: new Date(),
      lastModified: new Date(),

     }

     const createPost = await db()
     .collection("sample-blog")
     .insertOne(BlogData, function (err, result){

     })

    //  sampleBlogs.push(sampleBlogData)

     res.json({
       success: true,
       blogs: createPost
       

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