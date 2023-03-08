"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRoutes_1 = __importDefault(require("./userRoutes"));
class AppRoutes {
    constructor() {
        this.routers = [];
        this.setRouters();
    }
    setRouters() {
        this.routers.push(userRoutes_1.default);
    }
    getRouters() {
        return this.routers;
    }
}
exports.default = AppRoutes;
//# sourceMappingURL=index.js.map