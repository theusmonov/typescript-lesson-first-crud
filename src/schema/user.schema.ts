import { Schema, Types } from "mongoose";

export const userSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: true,
        minLength: 2,
        maxLength: 40,
        trim: true
    },
    age: {
        type: Schema.Types.Number,
        required: true,
        min: 15,
        max: 50
    },
    email: {
        type: Schema.Types.String,
        required: true
    }
})