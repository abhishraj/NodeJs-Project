import { Schema, model, Types } from 'mongoose';

interface IUser {
    name: string;
    email: string;
    phone?: string;
}

interface IUserReq {
    name?: string;
    email?: string;
    phone?: string;
}

interface UserDocument extends Document {
    name: string;
    email: string;
    phone?: string;
    _id: Types.ObjectId;
  }

const userSchema = new Schema({
		name: {type: String, required: true},
		email: { type: String, required: true },
		phone: String
});

const User = model<IUser>('User', userSchema);

class UserModel {
	
	user = model('user', userSchema);

    // To create User
	public async saveUser(query: IUser): Promise<IUser> {
        try{
            const savedResponse: IUser = await this.user.create(query);
            return Promise.resolve(savedResponse);
        } catch(exception) {
            return Promise.reject(exception);
        }
	}

    // To read or get User
	public async getUser(query: IUserReq): Promise<UserDocument> {
        try {
            const userFound: UserDocument = await this.user.find(query) as unknown as UserDocument;
            return Promise.resolve(userFound);
        } catch(exception) {
            return Promise.reject(exception);
        }
	}

    // To update User
    public async updateUser(query: IUserReq, body: IUserReq): Promise<UserDocument> {
        try {
            const userFound: UserDocument = await this.user.updateOne(query, body) as unknown as UserDocument;
            return Promise.resolve(userFound);
        } catch(exception) {
            return Promise.reject(exception);
        }
	}

    // To delete User
    public async deleteUser(query: IUserReq): Promise<any> {
        try {
            const userFound = await this.user.find(query);
            return Promise.resolve();
        } catch(exception) {
            return Promise.reject(exception);
        }
	}
}

export default UserModel