/**
 * Import mongoose https://mongoosejs.com/docs/guide.html
 */
const mongoose = require('mongoose')
/**
 * Mongo connector
 * @class Mongo
 */
class Mongo {
  constructor (config) {
    /**
     * Destructuring config
     */
    const {
      url,
      authDatabase,
      database,
      options
    } = config
    /**
     * Create uri
     */
    const uri = `${url}${database}?authSource=${authDatabase}`
    /**
     * Establish connection
     */
    mongoose.connect(uri, options)
    this.db = mongoose.connection
    /**
     * Add logging on error
     */
    this.db.on('error', console.error.bind(console, 'connection error:'))
    /**
     * Check connected
     */
    this.db.once('open', () => {
      console.log('Connected successfully to Atlas server')
    })
  }
  /**
   * Function to fetch data from provided collection
   * @param {string} collectionName - Name of the collection
   * @param {object} query - Query object
   * @returns {promise}
   */
  findDocument (collectionName, query = {}) {
    /**
     * Create new promise
     */
    const promise = new Promise((resolve, reject) => {
        /**
         * Open connection
         */
        this.db.once('open', () => {
            /**
             * Get collection instance
             */
            console.log(collectionName)
            this.db.collection(collectionName, (err, collection) => {
                if (err) {
                    reject(err)
                }
                /**
                 * Find documents from collection
                 */
                console.log(collection)
                collection.find(query).toArray((err, data) => {
                    if (err) {
                        reject(err)
                    }
                    /**
                     * Resolve promise
                     */
                    console.log(data)
                    resolve(data)
                })
            })
        })
    })
    /**
     * Return promise
     */
    return promise
  }
}

module.exports = Mongo
