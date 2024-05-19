import { DataSource } from "typeorm";
import { Register } from "../entities/user.entites";
const AppData=new DataSource(
    {
        type:"postgres",
        host:"localhost",
        port:5432,
        password:"root",
        username:"postgres",
        database:"test",
        logging:true,
        synchronize:true,
        entities:[
            Register
        ]
    }
)

export default AppData;