
const Post = require('../models/Post')

exports.getPosts = async(req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (err) {
    res.status(404).json({ message: error.message })
  }
}

exports.createPost = async(req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })

  try {
    const savedPost = await post.save()
    res.status(200).json(savedPost);    
  } catch (err) {
    res.status(404).json({ message: err })
  }
}

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.status(200).json(post)   
  } catch (err) {
    res.status(404).json({ message: err })
  }
}

exports.deletePost = async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId })
    res.status(200).json(removePost)   
  } catch (err) {
    res.json({ message: err })
  }
}

exports.updatePost = async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId }, 
      { $set: { title: req.body.title } }
    )   
   res.status(200).json(updatePost)   
  } catch (err) {
    res.json({ message: err })
  }
}