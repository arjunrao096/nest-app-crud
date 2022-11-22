import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()

export class User {

    @ApiProperty()
    @Prop()
    name: string;

    @ApiProperty()
    @Prop()
    email: string;

    @ApiProperty()
    @Prop()
    age: number

    @ApiProperty()
    @Prop()
    degree: string
}

export const UserSchema = SchemaFactory.createForClass(User);