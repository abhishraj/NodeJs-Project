import {Request, Response} from 'express';
import UserModel from '../models/user';

class UserController {
	public user = new UserModel();
    
    // Business Logic for GET API
	public async getUser(request: Request, response: Response) {
        try{
            const users = await this.user.getUser(request?.query);
		    response.send(users);
        } catch (exception) {
            response.status(400).send(exception);
        }
        
	}

     // Business Logic for POST API
     public async saveUser(request: Request, response: Response) {
        try{
            const insertedUser = await this.user.saveUser(request?.body);
            response.send(insertedUser);
        } catch (exception) {
            response.status(400).send(exception);
        }
	}

    // Business Logic for PUT API
    public async updateUser(request: Request, response: Response) {
        try{
            const insertedUser = await this.user.updateUser(request?.query, request?.body);
            response.send(insertedUser);
        } catch (exception) {
            response.status(400).send(exception);
        }
	}

    // Business Logic for DELETE API
    public async deleteUser(request: Request, response: Response) {
        try{
            const deletedUser = await this.user.deleteUser(request?.query);
            response.send({message: "User deleted Successfully"});
        } catch (exception) {
            response.status(400).send(exception);
        }
	}
}
 
export default UserController;