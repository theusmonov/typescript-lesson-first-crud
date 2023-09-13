import { Request, Response } from "express";
import { userModel } from "../models/usermodel.js";
import { Types } from "mongoose";

class userController {
    async addUser(req: Request, res: Response) {
        try {
            const data = await userModel.findOne({
                username: req.body.username
            })
            if (data) {
                res.status(400).json({
                    message: "Username bor malumotni o'zgartiring"
                })
            }

            const newUser = new userModel({
                username: req.body.username,
                age: req.body.age,
                email: req.body.email
            })
            await newUser.save()
            console.log(newUser);
            return res.status(201).json({
                data: newUser,
                message: "User malumotlari yaratildi"
            })

        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    async getUser(req: Request, res: Response) {
        try {
            const data = await userModel.find({})
            return res.status(200).json({
                data: data,
                message: "Userlar topildi"

            })
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message);

            }
        }
    }

    async updateUser(req: Request, res: Response) {
       try {
         const {id} = req.params
         const {username, age, email} = req.body
         const data = await userModel.findById(id)
         if(!data){
            res.status(404).json({
                message:"Id bo'yicha user topilmadi"
            })
         }
         const newUserUpdate = await userModel.updateOne({
             username,
             age,
             email
         })
         return res.status(201).json({
            newUserUpdate,
            message: "User updated"
         })
       } catch (err) {
         if(err instanceof Error){
            console.log(err.message);
            
         }
       }
    }

    async deleteUser(req: Request, res: Response) {
           try {
            const {id} = req.body
            const deleteId = new Types.ObjectId(id)

            if(!deleteId){
                res.status(304).json({
                    message: "Bu id dagi user topilmadi"
                })
            }

            const data = await userModel.deleteOne({
                _id: deleteId
            })

            return res.status(200).json({
                message:"Id bo'yicha user o'chirildi"
            })
            
           } catch (err) {
              if(err instanceof Error){
                console.log(err.message);
                
              }
           }
    }
}

export default new userController