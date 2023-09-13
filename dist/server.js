var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import "dotenv/config";
import dbMongo from "./db/mongo.connect.js";
import { userRouter } from "./routers/router.js";
let port = process.env.APP_PORT || 7800;
let host = process.env.APP_HOST || "localhost";
function startTheServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const app = express();
            yield dbMongo();
            app.use(express.json());
            app.use(userRouter);
            app.use("/*", (req, res) => {
                res.status(404).send( req.baseUrl +  " Not Found");
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
    });
}
startTheServer();
//# sourceMappingURL=server.js.map