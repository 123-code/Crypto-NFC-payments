import jwt from 'jsonwebtoken';
import {getGoogleuser} from '../util/getgoogleuser';
import {createGoogleUser} from '../util/createuser';
require("dotenv").config({ path: ".env" });

export const googleOauthCallbackRoute = {
    path:'/auth/google/callback',
    method:'get',
    handler:async(req,res)=>{
        const {code} = req.query;
        const oauthUserInfo = await getGoogleuser({code});
        const updateduser = await createGoogleUser({oauthUserInfo});
        const{_id:id,email,info} = updateduser;
        jwt.sign({id,email,info},process.env.JWT_SECRET,(err,token)=>{
            if(err) return res.sendStatus(500)
            // redirect to create pin screen. 
            
            res.redirect(`http://localhost:3001/Login?token=${token}`)
            //http://localhost:3001/Login?token=${token}
        })
    }
}//http://localhost:3000/