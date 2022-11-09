
import { google } from 'googleapis';   

export default function Oauth(){

    const oauthclient = new google.auth.Oauth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        'http://localhost:8080/auth/google/callback',
    );
       
     const getgooogleurl = ()=>{
       //telling google what were trying to access
        const scopes = [
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile'
        ]
    return oauthclient.generateAuthUrl({
        access_type:'offline',
        prompt:'consent',
        scope:scopes,
    })
    }

    return(
        <>
        <h1> Google Authentication</h1>
        </>
    )
}


// falta crear ruta


