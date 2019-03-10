const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID

class Mongo {
  constructor(config) {
    /**
     * Destructuring config
     */
    const {
      url,
      authDatabase,
      database,
      options
    } = config
    this.database = database
    this.client = new MongoClient(`${url}&authSource=${authDatabase}`, options)
    this.client.connect((err, client) => {
      if (err) {
        console.error(err)
      } else {
        this.db = client.db(database)
        console.log('Connected successfully to Atlas mongo server')
      }
    })
  }
  /**
   * Function to fetch data from provided collection
   * @param {string} collectionName - Name of the collection
   * @param {object} query - Query object
   * @returns {promise}
   */
  findDocument(args) {
    /**
     * Create new promise
     */
    const {
      collectionName,
      limit,
      query
    } = args
    const promise = new Promise((resolve, reject) => {
      /**
       * Open connection
       */
      const collection = this.db.collection(collectionName)
      collection.find(query).sort({'_id': -1}).limit(limit).toArray((err, docs) => {
        if (err) {
          reject(err)
        }
        resolve(docs)
      })
    })
    /**
     * Return promise
     */
    return promise
  }
}

module.exports = Mongo