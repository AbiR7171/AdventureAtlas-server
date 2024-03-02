import express, { Application, Request, Response } from "express"
const app : Application = express()
import cors from "cors"
import { userRoute } from "./app/modules/users/users.route"
import { tourRoute } from "./app/modules/tour/tour.route"



app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.use("/api/v1/user" ,userRoute )
app.use("/api/v1/tour" , tourRoute )


app.get('/', (req : Request, res : Response) => {

 res.send("Ready steady go")
})


export default app;