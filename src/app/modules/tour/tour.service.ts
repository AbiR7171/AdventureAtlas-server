import { TMembers, TTour } from "./tour.interface";
import { Tour } from "./tour.model";

const createTourIntoDB = async (tour: TTour) => {
  const result = await Tour.create(tour);
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
        model: "User", // Specify the model that 'membersInfo' refers to
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

  // Filter out members that already exist in the tour
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

export const tourServices = {
  createTourIntoDB,
  getSingleUserTourFromDB,
  addMembersFromDB,
};
