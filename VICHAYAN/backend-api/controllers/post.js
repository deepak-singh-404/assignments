//Models
const Post = require("../models/Post");
const User = require("../models/User");

module.exports = {

  //get all posts
  allPost: async (req, res) => {
    const user = req.user.id;
 
 },

 //get single post
 singlePost: async (req, res) => {
  const user = req.user.id;

},

 //create  post
    createPost: async (req, res) => {
   const user = req.user.id;
   const { description,  images,pdf,link} = req.body;
    try {
      const newPost = await new Post({
        description,images,pdf,link,
        postedBy:user._id
      }).save();
      res.json(newPost);
    } catch (err) {
      console.log(err)
      return res.json({message : err.message})
    }
},
  //edit post
  editPost: async (req, res) => {
    const user = req.user.id;
    const { description,  images,pdf} = req.body;
    
 },
   //remove post
   removePost: async (req, res) => {
    const user = req.user.id;
 
 },

  }