import { OauthClient } from "./OauthClient";

export const getgoogleURL = ()=>{
    //telling google what were trying to access
    const scopes = [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile'
    ]


    return OauthClient.generateAuthUrl({
        access_type:'offline',
        prompt:'consent',
        scope:scopes,
    })
}