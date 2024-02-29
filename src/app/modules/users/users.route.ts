import express from "express"
import { userController } from "./users.controller";

const route = express.Router();

route.post("/create-user", userController.createUser)
route.get("/get-a-user", userController.getAUser)


export const userRoute = route;