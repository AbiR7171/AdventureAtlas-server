import express from "express"
import { tourController } from "./tour.controller";

const route = express.Router();

route.post("/create-tour", tourController.createTour)


export const tourRoute = route;