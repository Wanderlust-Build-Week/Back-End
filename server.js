const express = require('express')

const loginRouter = require('./routes/login-router.js')
const authMiddleware = require('./routes/authentication/auth-middleware.js')

const server = express();

server.use(express.json())

server.use('/api/auth', loginRouter)
server.use('/api/tours', authMiddleware)

server.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to ChaseWallace.com API'})
})

module.exports = server;