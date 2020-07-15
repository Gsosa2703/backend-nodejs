const express = require('express')
const app = express()

const {config} = require('./config/index')

const moviesApi = require('./routes/movies.js')

const {logErrors, errorHandler, wrapErrors} = require('./utils/middleware/errorHandlers.js')

const notFoundHandler = require('./utils/middleware/notFoundHandler')



//body parser
app.use(express.json())

//routes
moviesApi(app)

//Catch 404
app.use(notFoundHandler)

//Errors Middlewares
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

//debugging middleware
require('express-debug')(app, {});

app.listen(config.port, ()=>{
    console.log(`Listening http://localhost:${config.port}`)
})