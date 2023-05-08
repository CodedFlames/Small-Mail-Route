import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
// import * as dotenv from 'dotenv';

const CORS = {allowMethods:["GET"], origin: '*'}; 

const server = new Hono();

server.use('*', cors(CORS));
server.use('*', logger());


server.get('/status', (Res)=>{
    console.log("Status Live!")
    return Res.json({status: "Okay"}, 200)
});


server.get('/pass/:word', (Res)=>{
    const word = Res.req.param('word');
    const Rword = Res.env.R_WORD;
    if (word === Rword){
        console.log("Password True.");
        return Res.json({status: true}, 200);
    }else{
        console.log("Password False.")
        return Res.json({status: false}, 200)
    }
})  //Just a small mock login.



export default server;