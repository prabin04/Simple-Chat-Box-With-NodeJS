var request = require('request')

describe('calc', ()=>{
    it('should multiply 2 and 2', () =>{
        expect(2*2).toBe(4)
    })
})

describe('get messages', (done)=>{
    it('should return a list, thats not empty',()=>{
        request.get('http://localhost:3000/messages', (err,res)=>{
            console.log(res.body)
            expect(res.body.length).toBeGreaterThan(0)
            done()
        })        
    })
})