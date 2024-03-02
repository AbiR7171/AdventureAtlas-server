import { Types } from "mongoose";



  

export type TExpense = {
      spender :  Types.ObjectId,
      date?: string,
      description: string,
      cost: number,
}

export type TMembers = {
     membersInfo: Types.ObjectId,
     initial: string
}

export type TTour = {
     tourName: string,
     price?: string,
     startDate?: string,
     endDate?: string,
     admin: Types.ObjectId,
     members?: TMembers[],
     expense?:TExpense[],
     image?: string,
}