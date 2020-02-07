const server = require('./server')
const db = require('./database/dbConfig.js')
const request = require('supertest')
const users = require('./db-models/users-model.js')
const tours = require('./db-models/tours-model.js')

beforeEach(async () => {
    await db.seed.run()
})

describe('tours model', () => {
    test('find', async() => {
        const res = await tours.find()
        expect(res.length).toBeGreaterThan(0)
    })
})

describe('users model', () => {
    test('find', async() => {
        const res = await users.find()
        expect(res.length).toBeGreaterThan(0)
    })
})

describe('user flow', () => {
    it('should return 201', async () => {
        const res = await request(server)
            .post('/api/auth/register')
            .send({username: 'test11', password: 'Test', accountType: 'guide'})
        
        expect(res.status).toBe(201)
    })
    it('should return token', async () => {
        const res = await request(server)
            .post('/api/auth/login')
            .send({username: 'test11', password: 'Test'})

        // expect(res.body.token).toBeTruthy()
        expect(res.status).toBe(200)
    })
    test('remove', async() => {
        const res = await request(server)
            .delete('/api/auth/deleteUser/test11')
        expect(res.status).toBe(201)
    })
})