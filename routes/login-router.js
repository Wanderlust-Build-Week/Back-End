const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secrets = require('../config/secret.js')

const users = require('../db-models/users-model.js')

router.post('/register', async(req, res, next) => {

    const user = req.body;

    //Validates if the information is present and then validates that there's a validate
    //account type
    if(!user || !user.username || !user.password || !user.accountType) {
        return res.status(401).json({message: 'Please include all required information for registration.'})
    } else if (user.accountType != 'user' && user.accountType != 'guide' ) {
        return res.status(401).json({message: `Account type needs to be 'guide' or 'user'`})
    }

    users.add(user)
        .then(saved => {
            return res.status(201).json(saved)
        })
        .catch(err => {
            return res.status(500).json({message: `Failed to register user to database`})
        })

})

router.post('/login', async(req, res, next) => {
    try {
        const {username, password} = req.body;

        const user = await users.findBy({username}).first()

        const passwordValid = await bcrypt.compare(password, user.password)

        if(user && passwordValid) {
            const token = generateToken(user);
            const userInfo = await users.findById(user.id).first()
            res.status(200).json({
                token: token,
                user: userInfo
            })
        } else {
            res.status(401).json({message: 'Authentication Failed'})
        }

    } catch(err) {
        res.status(401).json({message: 'Authentication Failed'})
    }
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        user: user.username,
        accountType: user.accountType
    }

    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;