import {sign} from "jsonwebtoken"
import {config} from "dotenv"
config()

export function  jwtgenerator (id:any) {
    const payload={user:id};
    return sign(payload,process.env.jwt_secret!,{expiresIn:"1hr"})

}