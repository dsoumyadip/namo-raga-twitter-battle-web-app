/**
 * Fetching mongo client from connectors
 */
const MongoClient = require('../connectors/Mongo')
const ObjectId = require('mongodb').ObjectID
const moment = require('moment')
/**
 * Contains functions to fetch data
 * @class CountCollection
 */
class CountCollection {
    constructor (config) {
        /**
         * Initializing mongo client
         */
        this.client = new MongoClient(config)
    }
    /**
     * Function to fetch tweet counts
     */
    getTweetCount (lastId, limit = 50) {
        try {
            let query = {}
            if (lastId) {
                query = {'_id': {'$gt': ObjectId(lastId)}}
            }
            const result = this.client.findDocument({
                collectionName: 'tweet_count',
                query,
                limit
            })
            return result
        } catch (err) {
            throw err
        }
    }
    /**
     * Function to fetch sentiment counts
     */
    getSentimentCount (lastId, limit = 50) {
        try {
            let query = {}
            if (lastId) {
                query = {'_id': {'$gt': ObjectId(lastId)}}
            }
            const result = this.client.findDocument({
                collectionName: 'sentiment_count',
                query,
                limit
            })
            return result
        } catch (err) {
            throw err
        }
    }
    /**
     * Function to fetch historical tweet count
     */
    getHistoricalTweetCount (from, to) {
        try {
            const query = {
                'timestamp': {
                    '$lte': moment(to).toDate(), 
                    '$gte': moment(from).toDate()
                }
            }

            const result = this.client.findDocument({
                collectionName: 'tweet_count',
                query,
                limit: 10
            })
            return result
        } catch (err) {
            throw err
        }
    }
}

module.exports = CountCollection
