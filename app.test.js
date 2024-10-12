import request from "supertest"
import app from "./app.js"

describe('GET /' , ()=>{
    it('should return hello world' , async()=>{
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('hello world');
    })
})