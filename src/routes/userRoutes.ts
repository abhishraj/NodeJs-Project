import express, { Router } from 'express';
import UserController from '../controllers/users.controller';

const userRoutes: Router = express.Router();
const controller = new UserController();

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
userRoutes.get('/get-user', controller.getUser);
userRoutes.post('/create-user', controller.saveUser);
userRoutes.put('/update-user', controller.updateUser);
userRoutes.delete('/delete-user', controller.deleteUser);


export default userRoutes;