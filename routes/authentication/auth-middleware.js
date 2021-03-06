const jwt = require('jsonwebtoken')

const secrets = require('../../config/secret.js')

module.exports = (req, res, next) => {
    const token = req.body.token;

    // console.log(token)

    try{
        const decoded = jwt.verify(token, secrets.jwtSecret)
        req.decoded = decoded;
        // console.log(decoded);
        next();
    } catch(err) {
        res.status(401).json({message: 'Invalid Token'})
    }
}