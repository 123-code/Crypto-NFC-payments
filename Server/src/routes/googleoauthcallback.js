import jwt from 'jsonwebtoken';
import {getGoogleuser} from '../util/getgoogleuser';
import {createGoogleUser} from '../util/createuser';

export const googleOauthCallbackRoute = {
    path:'/auth/google/callback',
    method:'get',
    handler:async(req,res)=>{
        const {code} = req.query;
        const oauthUserInfo = await getGoogleuser({code});
        const updateduser = await createGoogleUser({oauthUserInfo});
        const{_id:id,email,info} = updateduser;
        jwt.sign({id,email,info},process.env.JWT_CECRET,(err,token)=>{
            if(err) return res.sendStatus(500)
            res.redirect(`http://localhost:3000/login?token=${token}`)
        })
    }
}