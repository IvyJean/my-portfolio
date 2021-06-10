const mongoose = require('mongoose')

const ProfileSchema = mongoose.Schema({
  title: String,
  subTitle: String,
  description: String,
  introduction: String,
  technologies: [String],
  company: [{
    name: String,
    position: String,
    tenure: String,
    description: String,
  }],
  projects: [{
    name: String,
    description: String,
    tag: [String],
    url: [String],
  }]
})

module.exports = mongoose.model('Profile', ProfileSchema);