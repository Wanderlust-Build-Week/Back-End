const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secrets = require('../config/secret.js')
const authMiddleware = require('../routes/authentication/auth-middleware.js')

const tours = require('../db-models/tours-model.js')
const users = require('../db-models/users-model.js')

router.get('/', (req, res, next) => {
    tours.find()
        .then(saved => {
            return res.status(200).json(saved)
        })
        .catch( err => {
            return res.status(500).json({message: 'Failed to retrieve tours.'})
        })
})

router.post('/upload', authMiddleware, async (req, res, next) => {

    const tour = req.body.tour;

    console.log(req)

    if( !tour || !tour.title || !tour.photo || !tour.location || !tour.description || !tour.duration || !tour.guide) {
        return res.status(401).json({message: 'Please include all required information for a tour.'})
    }

    tour.user = req.decoded.user;

    tours.add(tour)
        .then(saved => {
            return res.status(201).json(saved)
        })
        .catch(err => {
            return res.status(500).json({message: `Failed to upload Tour`})
        })

}) 

router.get('/:id', async (req, res, next) => {
    const {id} = req.params;
    tours.findById(id)
        .then(tour => {
            return res.status(200).json(tour);
        })
        .catch(err => {
            return res.status(402).json({message: "Failed to find tour with that id"})
        })
})

router.get('/user/:username', async (req, res, next) => {
    const {username} = req.params;
    tours.findByUser(username)
        .then(data => {
            return res.status(200).json(data)
        })
        .catch(err => {
            return res.status(402).json({message: "Failed to find tours for the user"})
        })
})

router.delete('/delete/:id', authMiddleware, async (req, res, next) => {
    const {id} = req.params;
    tours.findById(id)
        .then(tour => {
            if(tour.user != req.decoded.user) {
                return res.status(401).json({message: "You can only delete your own tours."})
                
            } else {
                tours.remove(id)
                    .then(deleted => {
                        return res.status(200).json({message: 'Successfully deleted tour.'})
                    })
                    .catch(err => {
                        return res.status(500).json({message: 'Failed to delete tour.'})
                    })
            }
        })
        .catch(err => {
            return res.status(402).json({message: "Failed to find tour with that id"})
        })

    // console.log(tour.user)
    // console.log(req.decoded.user)

})

router.put('/update/:id', authMiddleware, async (req, res, next) => {

    const {id} = req.params;
    const tour = req.body.tour;
    // console.log(tour)
    // console.log(req.decoded.user)

    tours.findById(id)
        .then(saved => {
            if(saved) {
                if(saved.user != req.decoded.user) {
                    return res.status(401).json({message: 'You can only update your own tours.'})
                }else {
                    tours.update(tour, id)
                        .then(updatedTour => {
                            res.status(200).json(updatedTour)
                        })
                        .catch(err => {
                            res.status(500).json({message: `Failed to update tour ${err}`})
                        })
                }
            } else {
                res.status(404).json({message: `Could not find tour with id ${id}`})
            }
        })
        .catch(err => {
            return res.status(500).json({message: 'Failed to update tour.'})
        })

})

module.exports = router;