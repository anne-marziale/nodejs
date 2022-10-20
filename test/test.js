const { describe, it } = require('node:test')
var request = require('supertest')
var app = require('../index.js')

describe('GET /', function(){
    it('response avec Bonjour', ()=> {
        request(app).get('/').expect('{"response": "Bonjour !!" }', done)
    })
})

