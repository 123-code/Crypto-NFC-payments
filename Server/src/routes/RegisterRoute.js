import { express } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const SignupRoute = {
    path:'/api/signup',
    method:'POST',
    handler:async(req,res)=>{
const {username,password} = req.body;
// connect to DB

const passwordHash = await bcrypt.hash(password,10);
const emailhash = await bcrypt.hash(email,10);

jwt.sign({
    
})
    }

}