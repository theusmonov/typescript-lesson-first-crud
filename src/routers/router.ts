import { Router } from "express";
import userController from "../controllers/user.controller";






export const userRouter: Router = Router()

userRouter.post("/", userController.addUser)
userRouter.get("/", userController.getUser)
userRouter.put("/:id", userController.updateUser)
userRouter.delete("/", userController.deleteUser)