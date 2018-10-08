require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')

const connection = mongoose.connection
connection.on('connected', ()=>{
    console.log('successfully connected')
})
connection.on('error', (err)=>{
    console.log('failed to connect on: ' + err)
})

const indexRouter = require('./routes')
const usersRouter = require('./routes/users')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(__dirname + '/client/build'))

app.use('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

module.exports = app
