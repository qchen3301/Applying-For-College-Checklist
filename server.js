//importing dependencies
require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
//connecting to DB
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
const connection = mongoose.connection
connection.on('connected', ()=>{
    console.log('successfully connected')
})
//if conn throws error
connection.on('error', (err)=>{
    console.log('failed to connect on: ' + err)
})
//instansiating express and adding middleware
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(__dirname + '/client/build'))

//configuring app to use react for routes
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

const studentsController = require('./routes/studentsController')
app.use('/api/students', studentsController)

const actionItemsController = require('./routes/actionItemsController')
app.use('/api/students/:studentId/actionItems', actionItemsController)

module.exports = app