const express = require('express')
const cors = require('cors')
const app = express()
const routers = require('./routers')


app.use(express.json({}))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(routers)

module.exports = app