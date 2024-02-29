import { Types } from "mongoose";


export type TMembers = {
     name: string,
     membersInfo: Types.ObjectId,
     initialAmount: number
}

export type TTour = {
     tourName: string,
     price?: string,
     startDate?: string,
     endDate?: string,
     admin: Types.ObjectId,
     members?: TMembers[],
}