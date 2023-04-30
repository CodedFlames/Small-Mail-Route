import { Hono } from "hono";
// import * as dotenv from 'dotenv';



const server = new Hono();



server.get('/status', (Res)=>{
    console.log("Status Live!")
    return Res.json({status: "Okay"}, 200)
});

server.get('/pass/:word', (Res)=>{
    const word = Res.req.param('word');
    const Rword = Res.env.R_WORD;
    console.log(Rword)
    return Res.json({Real_Pass: Rword, Typed: word}, 200)
})



export default server;