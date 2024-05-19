import express,{Request,Response} from "express";
import cors from "cors";
import { Register } from "./entities/user.entites";
import AppData from "./datasource/datasource";
import router from "./routes/user";
const app=express()
const port=6000
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/auth",router)
app.listen(port,()=>{
    console.log("server running sunccesffuly on :",port);
    
})
