"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const mongo_connect_1 = __importDefault(require("./db/mongo.connect"));
const router_1 = require("./routers/router");
let port = process.env.APP_PORT || 7800;
let host = process.env.APP_HOST || "localhost";
async function startTheServer() {
    try {
        const app = (0, express_1.default)();
        await (0, mongo_connect_1.default)();
        app.use(express_1.default.json());
        app.use(router_1.userRouter);
        app.use("/*", (req, res) => {
            req.baseUrl + "not found";
        });
        app.listen(port, () => {
            console.log(`Server is running http://${host}:${port}`);
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}
startTheServer();
