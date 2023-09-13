var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { userModel } from "../models/usermodel.js";
import { Types } from "mongoose";
class userController {
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield userModel.findOne({
                    username: req.body.username
                });
                if (data) {
                    res.status(400).json({
                        message: "Username bor malumotni o'zgartiring"
                    });
                }
                const newUser = new userModel({
                    username: req.body.username,
                    age: req.body.age,
                    email: req.body.email
                });
                yield newUser.save();
                console.log(newUser);
                return res.status(201).json({
                    data: newUser,
                    message: "User malumotlari yaratildi"
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                }
            }
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield userModel.find({});
                return res.status(200).json({
                    data: data,
                    message: "Userlar topildi"
                });
            }
            catch (err) {
                if (err instanceof Error) {
                    console.log(err.message);
                }
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { username, age, email } = req.body;
                const data = yield userModel.findById(id);
                if (!data) {
                    res.status(404).json({
                        message: "Id bo'yicha user topilmadi"
                    });
                }
                const newUserUpdate = yield userModel.updateOne({
                    username,
                    age,
                    email
                });
                return res.status(201).json({
                    newUserUpdate,
                    message: "User updated"
                });
            }
            catch (err) {
                if (err instanceof Error) {
                    console.log(err.message);
                }
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.body;
                const deleteId = new Types.ObjectId(id);
                if (!deleteId) {
                    res.status(304).json({
                        message: "Bu id dagi user topilmadi"
                    });
                }
                const data = yield userModel.deleteOne({
                    _id: deleteId
                });
                return res.status(200).json({
                    message: "Id bo'yicha user o'chirildi"
                });
            }
            catch (err) {
                if (err instanceof Error) {
                    console.log(err.message);
                }
            }
        });
    }
}
export default new userController;
//# sourceMappingURL=user.controller.js.map