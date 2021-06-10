const express = require('express')
const router = express.Router()

const {
  getProfile,
  createProfile,
  getProfileById,
  deleteProfile,
  updateProfile,
} = require('../controllers/profile')

//get all posts
router.get('/', getProfile)

//submit posts
router.post('/', createProfile)

//specific post
router.get('/:id', getProfileById)

//delete post
router.delete('/:id', deleteProfile)

//update post
router.patch('/:id', updateProfile)

module.exports = router
