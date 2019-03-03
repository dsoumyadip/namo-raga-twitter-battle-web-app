const { graphql } = require('graphql')
const { ApolloServer } = require('apollo-server-express')
/**
 * Import schema
 */
const schema = require('./queries')
/**
 * NODE_ENV
 */
const NODE_ENV = process.env.NODE_ENV
/**
 * Function to create graphql query object
 * @param {object} query 
 * @param {object} variables 
 * @param {object} context 
 */
const graphqlQuery = (query, variables, context) => graphql(schema, query, null, context, variables)
/**
 * Logger
 * @param {obejct} req 
 * @param {object} res 
 * @param {object} next 
 */
const logger = (req, res, next) => {
  if (NODE_ENV === 'development') {
    console.info(`url: ${req.method} ${req.path}\ngraphql query: ${req.body.query}\ngraphql variables: ${JSON.stringify(req.body.variables, null, 2)}`)
  } else {
    console.info(`url: ${req.method} ${req.path}\ngraphql query: ${req.body.query}`)
  }
  next()
}
/**
 * Create apollo server
 */
const server = new ApolloServer({
  schema,
  context: ({ res }) => ({
    res
  }),
  formatError: (error) => {
    try {
      const json = JSON.parse(error.message)
      if (typeof json === 'object') {
        return json
      } else {
        return error
      }
    } catch (e) {
      return error
    }
  }
})
/**
 * Exports
 */
module.exports = {
  graphqlQuery,
  logger,
  appServer: server
}
