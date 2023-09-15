"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
let db = process.env.APP_DB;
async function dbMongo() {
    try {
        await mongoose_1.default.connect(db);
        console.log("Db ga ulandik");
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}
exports.default = dbMongo;
