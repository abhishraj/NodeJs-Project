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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        this.user = new user_1.default();
    }
    // Business Logic for GET API
    getUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.user.getUser(request === null || request === void 0 ? void 0 : request.query);
                response.send(users);
            }
            catch (exception) {
                response.status(400).send(exception);
            }
        });
    }
    // Business Logic for POST API
    saveUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const insertedUser = yield this.user.saveUser(request === null || request === void 0 ? void 0 : request.body);
                response.send(insertedUser);
            }
            catch (exception) {
                response.status(400).send(exception);
            }
        });
    }
    // Business Logic for PUT API
    updateUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const insertedUser = yield this.user.updateUser(request === null || request === void 0 ? void 0 : request.query, request === null || request === void 0 ? void 0 : request.body);
                response.send(insertedUser);
            }
            catch (exception) {
                response.status(400).send(exception);
            }
        });
    }
    // Business Logic for DELETE API
    deleteUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedUser = yield this.user.deleteUser(request === null || request === void 0 ? void 0 : request.query);
                response.send({ message: "User deleted Successfully" });
            }
            catch (exception) {
                response.status(400).send(exception);
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=users.controller.js.map