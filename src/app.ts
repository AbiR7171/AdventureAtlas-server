import express, { Application, Request, Response } from "express"
const app : Application = express()
import cors from "cors"
import { userRoute } from "./app/modules/users/users.route"



app.use(cors())
app.use(express.json())
app.use("/api/v1/user" ,userRoute )


app.get('/', (req : Request, res : Response) => {

 res.send("Ready steady go")
})


export default app;