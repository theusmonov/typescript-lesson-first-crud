import { Router } from "express";
import userController from "../controllers/user.controller.js";
export const userRouter = Router();
userRouter.post("/", userController.addUser);
userRouter.get("/", userController.getUser);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/", userController.deleteUser);
//# sourceMappingURL=router.js.map