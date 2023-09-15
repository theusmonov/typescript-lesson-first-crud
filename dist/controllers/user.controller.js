"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usermodel_js_1 = require("../models/usermodel.js");
const mongoose_1 = require("mongoose");
class userController {
    async addUser(req, res) {
        try {
            const data = await usermodel_js_1.userModel.findOne({
                username: req.body.username
            });
            if (data) {
                res.status(400).json({
                    message: "Username bor malumotni o'zgartiring"
                });
            }
            const newUser = new usermodel_js_1.userModel({
                username: req.body.username,
                age: req.body.age,
                email: req.body.email
            });
            await newUser.save();
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
    }
    async getUser(req, res) {
        try {
            const data = await usermodel_js_1.userModel.find({});
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
    }
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { username, age, email } = req.body;
            const data = await usermodel_js_1.userModel.findById(id);
            if (!data) {
                res.status(404).json({
                    message: "Id bo'yicha user topilmadi"
                });
            }
            const newUserUpdate = await usermodel_js_1.userModel.updateOne({
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
    }
    async deleteUser(req, res) {
        try {
            const { id } = req.body;
            const deleteId = new mongoose_1.Types.ObjectId(id);
            if (!deleteId) {
                res.status(304).json({
                    message: "Bu id dagi user topilmadi"
                });
            }
            const data = await usermodel_js_1.userModel.deleteOne({
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
    }
}
exports.default = new userController;
