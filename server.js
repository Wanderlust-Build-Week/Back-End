const express = require('express')

const authRouter = require('./authentication/auth-router.js')

const server = express();

server.use(express.json())

server.use('/api', authRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to ChaseWallace.com API'})
})

module.exports = server;