//importing dependencies
require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
//connecting to DB
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
app.use('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

const studentsController = require('./routes/studentsController')

//  declaring a route to go through API explicitly declares this route 
//  is from the server and not React
app.use('/api/students', studentsController)


//exporting app
module.exports = app