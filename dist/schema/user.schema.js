"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    username: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        minLength: 2,
        maxLength: 40,
        trim: true
    },
    age: {
        type: mongoose_1.Schema.Types.Number,
        required: true,
        min: 15,
        max: 50
    },
    email: {
        type: mongoose_1.Schema.Types.String,
        required: true
    }
});
