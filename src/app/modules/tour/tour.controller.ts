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


export const tourController = {
     createTour
}