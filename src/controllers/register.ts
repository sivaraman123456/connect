import { Router ,Request,Response} from "express";
import dotenv from "dotenv";
import AppData from "../datasource/datasource";
import { Register } from "../entities/user.entites";
import bcrypt from "bcrypt";
import { jwtgenerator } from "../utils/jwtgenerator";
dotenv.config()
AppData.initialize().then(()=>{
    console.log("Database successfully connected..!");
    }).catch((err)=>{
    console.error("Database connection error");
    })
const register=async(req:Request,res:Response)=>{
    
try {
   

    const {name,email,password,confirm_password,mobile_number,gender}=req.body;

const userRepo=AppData.getRepository(Register)
let existUser=await userRepo.findOne({where:{email:email}})    
if(existUser)
    {
        console.log("user already exist");
        
    }
let saltRound=10;
let salt =await bcrypt.genSalt(saltRound)
let bcryptpassword=await bcrypt.hash(password,salt)
let confirmpassword=await bcrypt.hash(confirm_password,salt)

const user1=new Register()
user1.name=name;
user1.email=email
user1.password=bcryptpassword
user1.confirm_password=confirmpassword
user1.mobile_number=mobile_number
user1.gender=gender

await userRepo.save(user1)

const userid=user1.id
const token=jwtgenerator({id:userid})
res.json({token:token})


} catch (error) {
    console.log(error);
    
}

}


export default register;