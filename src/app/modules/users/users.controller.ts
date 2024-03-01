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


const getAUser = async(req: Request, res: Response) =>{
       
     try{

      const {nameOrEmail} = req.query;
      console.log(nameOrEmail);
      const result = await userService.getAUserFromDB(nameOrEmail as string);
      res.status(200).json({
            success: true,
            message:"Find user successfully",
            data: result
      })

     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     }catch(err : any){
      res.status(200).json({
            success:false,
            message: err.message || "something went wrong",
            data: err
          })
     }

}

const getAUserWithId = async(req: Request, res: Response) =>{
       
      try{
 
       const {id} = req.query;
       console.log(id);
       const result = await userService.getAUserWithIdFromDB( id as string);
       res.status(200).json({
             success: true,
             message:"Find user successfully",
             data: result
       })
 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }catch(err : any){
       res.status(200).json({
             success:false,
             message: err.message || "something went wrong",
             data: err
           })
      }
 
 }


 const getAllUser = async(req: Request, res: Response) =>{
       
      try{
 
       const result = await userService.getAllUser();
       res.status(200).json({
             success: true,
             message:"Find user successfully",
             data: result
       })
 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }catch(err : any){
       res.status(200).json({
             success:false,
             message: err.message || "something went wrong",
             data: err
           })
      }
 
 }



export const userController = {
     createUser,
     getAUser,
     getAUserWithId,
     getAllUser
}