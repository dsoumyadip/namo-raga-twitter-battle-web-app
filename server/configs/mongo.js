module.exports = {
    url: process.env.MONGO_URL,
    authDatabase: process.env.MONGO_AUTH_DB,
    database: process.env.MONGO_DB,
    options: {
        useNewUrlParser: true
    }
}