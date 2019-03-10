const {
    graphql, // eslint-disable-line no-unused-vars
    GraphQLSchema, // eslint-disable-line no-unused-vars
    GraphQLObjectType, // eslint-disable-line no-unused-vars
    GraphQLString, // eslint-disable-line no-unused-vars
    GraphQLList, // eslint-disable-line no-unused-vars
    GraphQLInt, // eslint-disable-line no-unused-vars
    GraphQLInputObjectType, // eslint-disable-line no-unused-vars
    GraphQLBoolean, // eslint-disable-line no-unused-vars
    GraphQLFloat, // eslint-disable-line no-unused-vars
    GraphQLID, // eslint-disable-line no-unused-vars
    GraphQLNonNull, // eslint-disable-line no-unused-vars
    GraphQLEnumType // eslint-disable-line no-unused-vars
} = require('graphql')
const GraphQLJSONType = require('graphql-type-json') // eslint-disable-line no-unused-vars
/**
 * Config
 */
const mongoConfig = require('../configs/mongo')
/**
 * Collection
 */
const CountCollection = require('../collections/CountCollection')
/**
 * Init collection
 */
const countCollection = new CountCollection(mongoConfig)
/**
 * Type definations
 */
const tweetCountFields = {
    _id: {
        type: GraphQLID
    },
    namo_count: {
        type: GraphQLInt
    },
    raga_count: {
        type: GraphQLInt
    },
    timestamp: {
        type: GraphQLString
    }
}

const sentimentCountFields = {
    _id: {
        type: GraphQLID
    },
    namo_positive: {
        type: GraphQLInt
    },
    namo_negative: {
        type: GraphQLInt
    },
    raga_positive: {
        type: GraphQLInt
    },
    raga_negative: {
        type: GraphQLInt
    },
    timestamp: {
        type: GraphQLString
    }
}

const tweetCountType = new GraphQLObjectType({
    name: 'tweetCountType',
    fields: tweetCountFields
})

const sentimentCountType = new GraphQLObjectType({
    name: 'sentimentCountType',
    fields: sentimentCountFields
})
/**
 * Queries
 */
const getTweetCounts = {
    type: new GraphQLList(tweetCountType),
    args: {
        lastId: {
            type: GraphQLID
        },
        limit: {
            type: GraphQLInt
        }
    },
    resolve: (_, { lastId, limit }) => countCollection.getTweetCount(lastId, limit)
}

const getSentimentCounts = {
    type: new GraphQLList(sentimentCountType),
    args: {
        lastId: {
            type: GraphQLID
        },
        limit: {
            type: GraphQLInt
        }
    },
    resolve: (_, { lastId, limit }) => countCollection.getSentimentCount(lastId, limit)
}

const getHistoricalTweetCounts = {
    type: new GraphQLList(tweetCountType),
    args: {
        from: {
            type: GraphQLString
        },
        to: {
            type: GraphQLString
        }
    },
    resolve: (_, { from, to }) => countCollection.getHistoricalTweetCount(from, to)
}
/**
 * Mutations
 */
const dummy = {
    type: GraphQLBoolean,
    resolve: () => true
}
/**
 * Exports
 */
module.exports = {
    queries: {
        getTweetCounts,
        getSentimentCounts,
        getHistoricalTweetCounts
    },
    mutations: {
        dummy
    }
}
