/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { tourServices } from "./tour.service";


const createTour = async(req: Request, res: Response) =>{
     
     try{

        const tour =req.body;

        console.log(tour);
        const result = await tourServices.createTourIntoDB(tour)

        res.status(200).json({
            success: true,
            message: "Tour Created successfully",
            data: result
        })

     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     }catch(err : any){
        console.log(err);

        res.status(401).json({
            success: false,
            message: err.message || "something went wrong",
            data: err
        }) 
     }
}


const getSingleUserTour = async(req: Request, res: Response) =>{
     
    try{
        const {userId} = req.query;
        const result = await tourServices.getSingleUserTourFromDB(userId as string)
 
        res.status(200).json({
         success: true,
         message: "Single user tour find successfully",
         data: result
     })
    }catch(err : any){
        res.status(401).json({
            success: false,
            message: err.message || "something went wrong",
            data: err
        }) 
    }

       
}


const addMembers = async (req: Request, res: Response) =>{

     try{
        const {tourId} = req.query;
        const {members} = req.body;

        console.log(members, tourId);

        const result = await tourServices.addMembersFromDB(tourId as string, members)

         
        res.status(200).json({
            success: true,
            message: "Added tour user",
            data: result
        })

     }catch(err : any){
        console.log(err);
        res.status(200).json({
            success: false,
            message: err.message || "something went wrong",
            data: err
        }) 
     }
}


export const tourController = {
     createTour,
     getSingleUserTour,
     addMembers
}