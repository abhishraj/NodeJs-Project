"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String
});
const User = (0, mongoose_1.model)('User', userSchema);
class UserModel {
    constructor() {
        this.user = (0, mongoose_1.model)('user', userSchema);
    }
    // To create User
    saveUser(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const savedResponse = yield this.user.create(query);
                return Promise.resolve(savedResponse);
            }
            catch (exception) {
                return Promise.reject(exception);
            }
        });
    }
    // To read or get User
    getUser(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userFound = yield this.user.find(query);
                return Promise.resolve(userFound);
            }
            catch (exception) {
                return Promise.reject(exception);
            }
        });
    }
    // To update User
    updateUser(query, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userFound = yield this.user.updateOne(query, body);
                return Promise.resolve(userFound);
            }
            catch (exception) {
                return Promise.reject(exception);
            }
        });
    }
    // To delete User
    deleteUser(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userFound = yield this.user.find(query);
                return Promise.resolve();
            }
            catch (exception) {
                return Promise.reject(exception);
            }
        });
    }
}
exports.default = UserModel;
//# sourceMappingURL=user.js.map