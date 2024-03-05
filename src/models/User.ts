import { ObjectId, Schema, model } from "mongoose";

export interface IUser {
    id: string;
    name: string;
    surname: string;
    phone: number;
    mail: string;
    password: string;
}

const UserSchema = new Schema <IUser>({
    id: { type: String, required: true, unique: true},
    name: { type: String, required: true},
    surname: { type: String, required: false},
    phone: { type: Number, required: false},
    mail: { type: String, required: true, unique: true},
    password: { type: String, required: true, unique: true},
})

export const UserModel = model("User", UserSchema);