const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secrets = require('../config/secret.js')

const users = require('../users/users-model.js')

router.post('/register', (req, res, next) => {
    const user = req.body;
    if(!user || !user.username || !user.password || !user.accountType) {
        return res.status(401).json({message: 'Please include all required information for registration.'})
    }

    users.add(user)
        .then(saved => {
            return res.status(201).json(saved)
        })
        .catch(err => {
            return res.status(500).json({message: `Failed to register user: ${err}`})
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
        username: user.username,
        accountType: user.accountType
    }

    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;