import { Request, Response } from "express";
import { userService } from "./users.service";

const createUser =  async(req: Request, res: Response) =>{
     try{

        const user = req.body;
        const result = await userService.createUserIntoDB(user);
        
        res.status(200).json({
              success: true,
              message:"user created successfully",
              data: result
        })


     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     }catch(err : any){
           console.log(err);
           res.status(200).json({
             success:false,
             message: err.message || "something went wrong",
             data: err
           })
     }
}



export const userController = {
     createUser
}