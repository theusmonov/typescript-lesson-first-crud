import express, { Application } from "express";

async function startTheServer() {
    try {
        const app: Application = express()
        app.listen(9000, () => {
            console.log("Server is running on port 9000");
        })
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message);
            
        }
    }
}
startTheServer();

