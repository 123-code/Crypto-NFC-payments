import express from 'express';

export const googleoauthsettings = new google.auth.Oauth2(
    // .env variables not set yet 
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'http://localhost:5500/auth/google/callback',

)

export const getgoogleoauthURL = ()=>{
    const scopes = [    'https://www.googleapis.com/auth/userinfo.email',
                'https://www.googleapis.com/auth/userinfo.profile']

    return googleoauthsettings.generateAuthUrl({
        access_type:'offline',
        prompt:'consent',
        scope:scopes,
    })
}

