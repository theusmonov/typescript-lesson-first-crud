import mongoose from "mongoose";
import "dotenv/config"

let db = process.env.APP_DB as string

async function dbMongo() {
    try {
        await mongoose.connect(db)
        console.log("Db ga ulandik");
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}


export default dbMongo