import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({timestamps: true })
export class User extends Document{
    @Prop({required: false})
    name: string;

    @Prop({required: false, unique: true})
    email:string;

    @Prop({required: false})
    password:string;

    @Prop({ required: false, type: Date })
    email_verified_at: Date; 
}

export const UserSchema = SchemaFactory.createForClass(User);