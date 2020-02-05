const bcrypt = require('bcryptjs')

const db = require('../database/dbConfig.js')

function find() {
    return db('tours')
}

function findById(id) {
    return db('tours').where({id}).first('id', 'user', 'title', 'photo', 'location', 'description')
}

function findBy(filter) {
    return db('tours').where({id}).first('id', 'user', 'title', 'photo', 'location', 'description')
}

async function add(tour) {
    const [id] = await db('tours').insert(tour)
    return findById(id)
}

function remove(id) {
    return db('tours').where({id}).del()
}

async function update(tour, id) {
    console.log(tour)
    await db('tours').where({id}).update(tour)
    const newTour = await db('tours').where({id})
    return newTour
}

module.exports = {
    find, findBy, findById, add, update, remove
}