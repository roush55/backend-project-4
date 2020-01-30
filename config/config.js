const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/Store",{ useUnifiedTopology: true,useNewUrlParser: true ,useMongoClient: true})

const db = mongoose.connection

db.on('error', ()=> console.error)
db.once('open', ()=> console.log("conneted"))



module.exports = db