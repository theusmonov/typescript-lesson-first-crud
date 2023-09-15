"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_schema_1 = require("../schema/user.schema");
exports.userModel = mongoose_1.default.model('people', user_schema_1.userSchema);
