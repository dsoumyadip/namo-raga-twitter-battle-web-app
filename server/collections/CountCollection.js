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
    async getTweetCount (query = {}) {
        try {
            const result = this.client.findDocument('tweet_count', query)
            console.log(result)
            return result
        } catch (err) {
            throw err
        }
    }
    /**
     * Function to fetch sentiment counts
     */
    async getSentimentCount (query = {}) {
        try {
            const result = this.client.findDocument('sentiment_count', query)
            console.log(result)
            return result
        } catch (err) {
            throw err
        }
    }
}

module.exports = CountCollection
