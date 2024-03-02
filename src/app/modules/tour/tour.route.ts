import express from "express"
import { tourController } from "./tour.controller";
import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "public/images");
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now();
         cb(null, uniqueSuffix + file.originalname)
    }
})

const upload = multer({storage: storage});

const route = express.Router();

route.post("/create-tour", tourController.createTour);
route.put("/upload-image/:id",upload.single("image"), tourController.imageUpload);

route.get("/user-all-tour", tourController.getSingleUserTour)
route.put("/add-members", tourController.addMembers)
route.delete("/delete-tour/:id", tourController.deleteATour)
route.get("/a-tour/:id", tourController.getASingleTourData)
route.put("/edit-tour/:id", tourController.editTour)
route.put("/add-expense/:id", tourController.handleExpense)


export const tourRoute = route;