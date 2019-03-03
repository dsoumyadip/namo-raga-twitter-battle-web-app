/**
 * Graphql imports
 */
const { GraphQLObjectType, GraphQLSchema } = require('graphql')
/**
 * Types
 */
const count = require('./countType')
/**
 * Add all queries
 */
const queryFields = Object.assign({},
    count.queries
)
/**
 * Add all mutations
 */
const mutationFields = Object.assign({},
    count.mutations
)
/**
 * Create schema
 */
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'queryRoot',
        fields: queryFields
    }),
    mutation: new GraphQLObjectType({
        name: 'mutationRoot',
        fields: mutationFields
    })
})
/**
 * Export schema
 */
module.exports = schema
