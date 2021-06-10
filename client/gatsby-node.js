const path = require('path')

const indexTemplate = path.resolve(`./src/templates/Main/Main.js`)
const blankPage = path.resolve(`./src/pages/404.js`)

exports.createPages = async ({ graphql, actions: { createPage } }) => {

  createPage({
    path: '/',
    component: indexTemplate,
  })
}