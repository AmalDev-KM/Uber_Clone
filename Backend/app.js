const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const ConnectToDb = require('./db/db')

ConnectToDb()
app.get('/', (req, res) => {
  res.send('Hello World!')
})


module.exports = app