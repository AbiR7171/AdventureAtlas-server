import express from "express"
import { tourController } from "./tour.controller";

const route = express.Router();

route.post("/create-tour", tourController.createTour)
route.get("/user-all-tour", tourController.getSingleUserTour)
route.put("/add-members", tourController.addMembers)
route.delete("/delete-tour/:id", tourController.deleteATour)
route.get("/a-tour/:id", tourController.getASingleTourData)
route.put("/edit-tour/:id", tourController.editTour)
route.put("/add-expense/:id", tourController.handleExpense)


export const tourRoute = route;