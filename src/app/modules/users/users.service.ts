import { TUser } from "./users.interface";
import { User } from "./users.model";

const createUserIntoDB = async(user: TUser)=>{

    const checkUserName = await User.findOne({userName: user.userName});
    const checkEmail = await  User.findOne({email: user.email})
    console.log(checkUserName);

    if(checkUserName){
         throw new Error("userName is already taken")
    }

    if(checkEmail){
        throw new Error("Email is already taken")
    }
     
    const result = await User.create(user);
    return result
}


export const userService = {
     createUserIntoDB
}