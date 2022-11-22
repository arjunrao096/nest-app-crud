import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/users.schema';
@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async createUser(data: User):Promise<any>{
        let newUser = new this.userModel(data);
        return await newUser.save();
    }

    async getAllUsers():Promise<any[]>{
        return await this.userModel.find({}, {__v:0});
    }

    async getUser(id: string):Promise<object>{
        return await this.userModel.findOne({_id: id},{__v: 0});
    }

    async updateUser(id: string, data: object){
        return await this.userModel.findByIdAndUpdate(id, data, {new:true});
    }
    
    async deleteUser(id: string): Promise<any>{
        return await this.userModel.findByIdAndDelete(id);
    }

}
