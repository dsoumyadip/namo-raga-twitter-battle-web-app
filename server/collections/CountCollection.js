/**
 * Fetching mongo client from connectors
 */
const MongoClient = require('../connectors/Mongo')
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
    getTweetCount (lastId, limit) {
        try {
            const result = this.client.findDocument('tweet_count', lastId, limit)
            return result
        } catch (err) {
            throw err
        }
    }
    /**
     * Function to fetch sentiment counts
     */
    getSentimentCount (lastId, limit) {
        try {
            const result = this.client.findDocument('sentiment_count', lastId, limit)
            return result
        } catch (err) {
            throw err
        }
    }
}

module.exports = CountCollection
