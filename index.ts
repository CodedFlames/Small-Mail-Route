import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

const Server = new Hono()
const CurrentCORS = {allowMethods:['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
origin: '*'
}


Server.use('*', cors(CurrentCORS))
Server.use('*', logger())


Server.get('/',  serveStatic({ root: './'}))
Server.get('/styles.css', serveStatic({ path: './styles.css' }))

Server.get("/status", (Res) => {
    return Res.json({"status":"Okay"},200)
})


export default Server
