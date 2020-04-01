const express = require('express')
const config = require('./config')
const mongo = require('./mongo');

const app = express()
app.use(mongo({}));
console.log(mongo);

app.get('/', (req, res, next) => {
    res.send("Hello world duoc roi nhe anh em");
    req.db.collection('users').insertOne({name: 'sondn2', age: '21'})
    req.db.collection('users').find({}).toArray(function(err, user){
        console.log(user);
    });
});

app.listen(config.PORT, function () {
    console.log(`Serving on ${config.HOST_NAME}:${config.PORT}...`);
})