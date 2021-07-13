const path = require('path')

const indexTemplate = path.resolve(`./src/templates/Main/Main.js`)
const blankPage = path.resolve(`./src/pages/404.js`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type AuthorJson implements Node {
      joinedAt: Date
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {

  createPage({
    path: '/',
    component: indexTemplate,
  })
}