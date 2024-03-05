import { ObjectId, Schema, model } from "mongoose";

export interface IActivity {
    name: string;
    description: string;
    user: ObjectId;
    rate: number;
}

const ActivitySchema = new Schema <IActivity>({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: false },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    rate: { type: Number, required: false },
})

export const ActivityModel = model("Activity", ActivitySchema);