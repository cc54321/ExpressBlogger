const validateBlogs = (blogData) => {

	

	if (blogData.title === undefined || typeof(blogData.title) !== "string" || blogData.title.length > 40) {
		
		return {
			isValid: false,
			message: "title is required and must be of type string less than 40 characters"
		}
	}

	if (blogData.text === undefined || typeof(blogData.text) !== "string") {
		
		return {
			isValid: false,
			message: "blog is required and must be of type string"
		}
	}

	if (blogData.author === undefined || typeof(blogData.author) !== "string" || blogData.author.length > 40 ) {
		
		return {
			isValid: false,
			message: "Author is required and it must be a string and less than 40 characters"
		}
	}

	if (blogData.category === undefined || !Array.isArray(blogData.category) || blogData.category.length === 0) {
		
		return {
			isValid: false,
			message: "category is required and must have length"
		}
	}

    

    
       let newArrayCategories = ["Lorem", "ipsum", "dolor", "sit", "amet"]
       let isValid = true

        
          blogData.category.forEach(category => {
            
            console.log(category)
            if(!newArrayCategories.includes(category)){
              
                isValid = false
                
                
            }
            
          });

          if (isValid === false){
            
            return {
            isValid: false,
            message: "category must be of type string and must include categories Lorem, ipsum, dolor, sit, amet"
            }
          }
             
            
    
    
    

    if (blogData.category.length > 10) {
		// check if the type is anything except 'number'
		return {
			isValid: false,
			message: "You can only have less than 10 categories per submission and catagories must be of type Lorem, ipsum, dolor, sit or amet "
		}
	}



	//  .filter() to iterate 
	const newBlogData = blogData.category.filter((blogs)=>{

		// If  callback returns false, the item will be filtered out
		if (typeof(blogs) !== 'string') {
			return true
		} else {
			return false
		}
	})

	console.log("blogs", newBlogData)

	if (newBlogData.length > 0) {
		return {
			isValid: false,
			message: "category must be an array of strings"
		}
	}

	return {
		isValid: true
	}
}





module.exports = {
	
	validateBlogs, 
}



// if (sampleBlogData.title === undefined || typeof(sampleBlogData.title) !== "string") {
//     return {
//                 isValid: false,
//                 message: "title is required and must be string"
//         }

// if (sampleBlogData.text === undefined || typeof(sampleBlogData.text) !== "string") {
    
//     return {
//         isValid: false,
//         message: "blog is required and must be of type string"
//     }
// }

// if (sampleBlogData.author === undefined || typeof(sampleBlogData.author) !== "string") {
//    
//     return {
//         isValid: false,
//         message: "Author required and  must be a string"
//     }
// }
// module.exports = {
	
// 	validateBlogs, 
 