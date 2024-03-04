import { Schema, model } from "mongoose";
import { TExpense, TMembers, TTour } from "./tour.interface";

const memberSchema =  new Schema<TMembers>({
      initial:{type: String},
     membersInfo:{type: Schema.Types.ObjectId,required:true, ref: "User"},
})

const expenseSchema = new Schema<TExpense>(
    {
        spender: {type: Schema.Types.ObjectId, required: true, ref:"User"},
        date:{ type: String},
        cost:{type: Number, required:true},
        description:{type:String, required:true}
    }
) 

const tourSchema = new Schema<TTour>(
    {
        tourName: {type: String, required:[true, "Tour is required"]},
        price: {type: String},
        startDate: {type: String},
        endDate: {type: String},
        admin: {type: Schema.Types.ObjectId, required: true, ref:"User"},
        members: [memberSchema],
        expense:[expenseSchema],
        image:{type: String}
    },
    {
        timestamps: true
    }
)


export const Tour =  model<TTour>("Tour", tourSchema)


