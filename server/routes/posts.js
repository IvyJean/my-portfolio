const express = require('express');
const router = express.Router();

const { getPosts, createPost, getPostById, deletePost, updatePost, } = require('../controllers/posts')

//get all posts
router.get('/', getPosts)

//submit posts
router.post('/', createPost)

//specific post
router.get('/:postId', getPostById)

//delete post
router.delete('/:postId', deletePost)

//update post
router.patch('/:postId', updatePost)

module.exports = router