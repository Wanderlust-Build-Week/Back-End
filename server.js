const express = require('express')
const cors = require('cors');

const loginRouter = require('./routes/login-router.js')
// const authMiddleware = require('./routes/authentication/auth-middleware.js')
const toursRouter = require('./routes/tours-router.js')

const server = express();

server.use(cors())
server.use(express.json())

server.use('/api/auth', loginRouter)
server.use('/api/tours', toursRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to Wanderlust API'})
})

module.exports = server;