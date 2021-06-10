const Profile = require('../models/Profile')

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.find()
    res.status(200).json(profile)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

exports.createProfile = async (req, res) => {
  const { 
    title, 
    subTitle, 
    description, 
    introduction, 
    technologies,
    company,
    projects
  } = req.body
  const profile = new Profile({
    title,
    subTitle,
    description,
    introduction,
    technologies,
    company,
    projects
  })

  try {
    const savedProfile = await profile.save()
    res.status(200).json(savedProfile)
  } catch (err) {
    res.status(404).json({ message: err })
  }
}

exports.getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id)
    res.status(200).json(profile)
  } catch (err) {
    res.status(404).json({ message: err })
  }
}

exports.deleteProfile = async (req, res) => {
  try {
    const removeProfile = await Profile.remove({ _id: req.params.id })
    res.status(200).json(removeProfile)
  } catch (err) {
    res.json({ message: err })
  }
}

exports.updateProfile = async (req, res) => {
  try {
    const {
      title,
      subTitle,
      description,
      introduction,
      technologies,
      company,
      projects,
    } = req.body

    const updateProfile = await Profile.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title,
          subTitle,
          description,
          introduction,
          technologies,
          company,
          projects,
        },
      }
    )
    res.status(200).json(updateProfile)
  } catch (err) {
    res.json({ message: err })
  }
}
