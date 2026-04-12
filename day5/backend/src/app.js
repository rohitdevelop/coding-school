const express = require('express')
const userRoute = require('./routes/user.route')
const app = express()

app.use(express.json())
app.use('/api/user', userRoute)

module.exports = app