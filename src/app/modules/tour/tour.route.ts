import express from "express"
import { tourController } from "./tour.controller";

const route = express.Router();

route.post("/create-tour", tourController.createTour)
route.get("/user-all-tour", tourController.getSingleUserTour)
route.put("/add-members", tourController.addMembers)


export const tourRoute = route;