
const config = require('./config')
const MongoClient = require('mongodb').MongoClient;

module.exports = function (options) {
    return function (req, res, next) {
        MongoClient.connect(config.MONGODB_URL, function(err, client){
            const db = client.db();
            req.db = db;
            next();
        });
    }
}

// module.exports = function (req, res, next) {
//     MongoClient.connect(config.MONGODB_URL, function(err, client){
//         const db = client.db();
//         req.db = db;
//         next();
//     });
// }
