// import express from "express";
import express from "express";

const app = express()

app.get('/' , (req , res)=>{
    res.send("hello world")
})

export default app