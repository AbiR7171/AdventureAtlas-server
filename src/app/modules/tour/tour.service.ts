import mongoose from "mongoose";
import { TExpense, TMembers, TTour } from "./tour.interface";
import { Tour } from "./tour.model";

const createTourIntoDB = async (tour: TTour) => {
  const result = await Tour.create(tour);
  return result;
};

const imageUploadIntoDB = async (id: string, imageName: string) => {
  const result = await Tour.updateOne(
    { _id: id },
    { $set: { image: imageName } }
  );
  return result;
};

const getSingleUserTourFromDB = async (id: string) => {
  const tours = await Tour.find({ admin: id })
    .sort({ _id: -1 })
    .populate("admin")
    .populate({
      path: "members",
      populate: {
        path: "membersInfo",
        model: "User",
      },
    });
  return tours;
};

const addMembersFromDB = async (id: string, members: TMembers[]) => {
  console.log(members, "service");

  const tour = await Tour.findById(id);

  const existingMembersInfo = tour?.members?.map((member) =>
    member.membersInfo.toString()
  );

  const newMembers = members.filter(
    (member) => !existingMembersInfo?.includes(member.membersInfo.toString())
  );

  const result = await Tour.findOneAndUpdate(
    { _id: id },
    { $addToSet: { members: { $each: newMembers } } },
    { new: true }
  );

  return result;
};

const deleteATourFromDB = async (id: string) => {
  const result = await Tour.deleteOne({ _id: id });
  return result;
};

const getASingleTourDataFromDB = async (id: string) => {
  const result = await Tour.findOne({ _id: id })
    .populate("admin")
    .populate({
      path: "members",
      populate: {
        path: "membersInfo",
        model: "User",
      },
    })
    .populate({
      path: "expense",
      populate: {
        path: "spender",
        model: "User",
      },
    });

  return result;
};

const editTourFromDB = async (id: string, updateDoc: TTour) => {
  const result = await Tour.updateOne(
    { _id: id },
    {
      $set: {
        tourName: updateDoc.tourName,
        price: updateDoc.price,
        startDate: updateDoc.startDate,
        endDate: updateDoc?.endDate,
      },
    }
  );

  return result;
};

const handleExpenseFromDB = async (
  id: string,
  expense: TExpense,
) => {


  const result = await Tour.updateOne(
    { _id: id },
    { $push: { expense: expense } },
    { new: true }
  ).populate({
    path: "expense",
    populate: {
      path: "spender",
      model: "User",
    },
  });

  return result;
};

const getASingleUserExpenseFromDB = async (id: string) => {
 
  
    const result = await Tour.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
             $lookup : {
              from: 'User', 
              localField: 'membersInfo', 
              foreignField: '_id', 
              as: 'populatedField' 
             }
      },
      {$unwind: "$expense"},
      { $group: { _id: "$expense.spender",
      totalCost : {$sum : "$expense.cost"}
    },
   
    
        
    },
    ]);
    console.log(result);


  return result


  
};

export const tourServices = {
  createTourIntoDB,
  getSingleUserTourFromDB,
  addMembersFromDB,
  deleteATourFromDB,
  getASingleTourDataFromDB,
  editTourFromDB,
  handleExpenseFromDB,
  imageUploadIntoDB,
  getASingleUserExpenseFromDB
};
