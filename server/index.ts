import { Hono } from "hono";




const server = new Hono();



server.get('/status', (Res)=>{
    console.log("Status Live!")
    return Res.json({status: "Okay"}, 200)
});



export default server;