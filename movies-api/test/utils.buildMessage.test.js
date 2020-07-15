const assert = require('assert')

const buildMessage = require('../utils/buildMessaje')

describe.only('utils - buildMessage', ()=> {
    describe('when recieves an entity and an action', ()=>{
        it('should return the respective message', ()=>{
            const result = buildMessage('movie', 'create')
            const expect = 'movie created'
            assert.strictEqual(result, expect)
        })
    })
})

describe('when recieves and entity and an action and it is a list', ()=>{
    it('should return the respectove message with the entity in plural', ()=>{
        const result = buildMessage('movie','list')
        const expected = 'movies listed'
        assert.strictEqual(result, expected)
    })
})