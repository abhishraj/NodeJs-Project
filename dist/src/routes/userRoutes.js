"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const userRoutes = express_1.default.Router();
const controller = new users_controller_1.default();
/**
 * @swagger
 * /getUser:
 * get:
 *  summary: User APIs for CRUD User functionalities
 *  description: These APIs are used to create, get, update and delete User level information
 *  responses:
 *      200:
 *          description: To test User level methods
 */
userRoutes.get('/getUser', controller.getUser);
userRoutes.post('/createUser', controller.saveUser);
userRoutes.put('/updateUser', controller.updateUser);
userRoutes.delete('/deleteUser', controller.deleteUser);
exports.default = userRoutes;
//# sourceMappingURL=userRoutes.js.map