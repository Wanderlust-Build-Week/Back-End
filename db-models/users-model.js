const bcrypt = require('bcryptjs')

const db = require('../database/dbConfig.js')

function find() {
    return db('users').select('id', 'username', 'accountType')
}

function findById(id) {
    return db('users').where({id}).first('id', 'username', 'accountType')
}

function findBy(filter) {
    return db('users').where(filter).first('id', 'username', 'password')
}

function findByUser(filter) {
    return db('users').where({username: filter})
}

async function add(user) {
    user.password = await bcrypt.hash(user.password, 12)
    const [id] = await db('users').insert(user)
    return findById(id)
}

function remove(id) {
    return db('users').where({username: id}).del()
}

module.exports = {
    find, findBy, findById, add, remove, findByUser
}