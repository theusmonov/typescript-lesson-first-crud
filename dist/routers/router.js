import { Router } from "express";
import userController from "../controllers/user.controller.js";
export const userRouter = Router();
userRouter.post("/", userController.addUser);
userRouter.get("/", userController.getUser);
//# sourceMappingURL=router.js.map