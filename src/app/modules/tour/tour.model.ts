import { Schema, model } from "mongoose";
import { TMembers, TTour } from "./tour.interface";

const memberSchema =  new Schema<TMembers>({
     name: {type: String, required: [true, "name is required"]},
     initialAmount:{type: Number},
     membersInfo:{type: Schema.Types.ObjectId, ref: "User"}
})

const tourSchema = new Schema<TTour>(
    {
        tourName: {type: String, required:[true, "Tour is required"]},
        price: {type: String},
        startDate: {type: String},
        endDate: {type: String},
        admin: {type: Schema.Types.ObjectId, required: true, ref:"User"},
        members: [memberSchema]
    },
    {
        timestamps: true
    }
)


export const Tour =  model<TTour>("Tour", tourSchema)


