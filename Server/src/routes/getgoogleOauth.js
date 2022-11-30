import {getgoogleURL} from '../util/getgoogleURL';

export const getgoogleURLRoute = {
    path:'/auth/google/url',
    method:'get',
    handler:(req,res)=>{
        const url = getgoogleURL();
        res.status(200).json({url});
    }

}