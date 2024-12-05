const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient } = require('mongodb')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
// console.log(process.env.DB_URI)
const port = 3000
const url = process.env.DB_URI
const client = new MongoClient(url);

const dbName = 'passop'
client.connect();
app.use(bodyparser.json())
app.use(cors())


app.get('/',async (req, res) => {
    const db = client.db(dbName)
    collection = db.collection('passwords')
    const findResult = await collection.find({}).toArray();

  res.json(findResult)
})

//save a password
app.post('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName)
    const collection = db.collection('passwords')
    const findResult=  await collection.insertOne(password)
    res.send({result:findResult,success:true})
})

//delete a password
app.delete('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName)
    const collection = db.collection('passwords')
    const findResult = await collection.deleteOne(password)
    res.send({result:findResult,success:true})
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
