/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { tourServices } from "./tour.service";




 


const createTour = async(req: Request, res: Response) =>{
     
     try{

    

        const tour = req.body;
        
      
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



const imageUpload = async(req: Request, res: Response) =>{
     
    try{

        const {id} = req.params
        const imageName = req.file?.filename;

        console.log(id, imageName);
       
     
       const result = await tourServices.imageUploadIntoDB(id, imageName as string)

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

const deleteATour = async (req: Request, res: Response) =>{

    try{
       const {id} = req.params;

       console.log(id);

       const result = await tourServices.deleteATourFromDB(id as string)

        
       res.status(200).json({
           success: true,
           message: "Tour deleted successfully",
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

const getASingleTourData = async (req: Request, res: Response) =>{

    try{
       const {id} = req.params;


       const result = await tourServices.getASingleTourDataFromDB(id as string)

        
       res.status(200).json({
           success: true,
           message: "Tour data find successfully",
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


const editTour = async(req:Request, res: Response) =>{
       
 try{
    const {id} =req.params;
    const updateDoc = req.body

    console.log(id, updateDoc);
    const result = await tourServices.editTourFromDB(id, updateDoc)

    res.status(200).json({
     success: true,
     message: "Tour data find successfully",
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


const handleExpense = async(req:Request, res: Response) =>{
       
    try{
       const {id} =req.params;
       const expenseDoc = req.body;
    
   
       console.log(id, expenseDoc);
       const result = await tourServices.handleExpenseFromDB(id, expenseDoc)
   
       res.status(200).json({
        success: true,
        message: "Expense added  successfully",
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


   const getASingleUserExpense = async(req:Request, res: Response) =>{
       
    try{
       const {id} =req.params;
    
       console.log(id);
       const result = await tourServices.getASingleUserExpenseFromDB(id)
   
       res.status(200).json({
        success: true,
        message: "Expense cost find  successfully",
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
     addMembers,
     deleteATour,
     getASingleTourData,
     editTour,
     handleExpense,
     imageUpload,
     getASingleUserExpense
     
     
}