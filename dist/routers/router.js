"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/", user_controller_1.default.addUser);
exports.userRouter.get("/", user_controller_1.default.getUser);
exports.userRouter.put("/:id", user_controller_1.default.updateUser);
exports.userRouter.delete("/", user_controller_1.default.deleteUser);
