import { Router } from "express";
import userRoutes from "./userRoutes";

class AppRoutes {
    public routers: Router[] = [] as Router[];
    constructor() {
        this.setRouters();
    }
    private setRouters() {
        this.routers.push(userRoutes);
    }
    public getRouters() {
        return this.routers;
    }
}

export default AppRoutes;