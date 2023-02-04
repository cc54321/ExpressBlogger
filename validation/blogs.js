
if (blogData.title === undefined || typeof(blogData.title) !== "string" || blogData.title.length > 40) {
    //blog data must be of type string
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
    // lastName is required and it must be a string
    return {
        isValid: false,
        message: "Author is required and it must be a string and less than 40 characters"
    }
}
module.exports = {
	
	validateBlogs, 
}