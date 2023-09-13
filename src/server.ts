import express, { Application } from "express";
import "dotenv/config"
import dbMongo from "./db/mongo.connect";
import { userRouter } from "./routers/router";




let port = process.env.APP_PORT as string || 7800
let host = process.env.APP_HOST as string || "localhost"

async function startTheServer() {
    try {
        const app: Application = express()
        await dbMongo()
        app.use(express.json())
        app.use(userRouter)
        app.use("/*", (req, res) => {
            req.baseUrl + "not found"
        })
        app.listen(port, () => {
           console.log( `Server is running http://${host}:${port}`);
           
        })
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message);
            
        }
    }
}
startTheServer();

