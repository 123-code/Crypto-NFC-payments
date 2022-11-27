import express from 'express';
import {google} from 'googleapis';
import {googleoauthsettings,getgoogleoauthURL} from './util';

export const getgoogleurlRoute = {
    path:'/auth/google/url',
    method:'get',
    handler:(req,res)=>{
        const OAUTHURL = getgoogleoauthURL();
        res.status(200).json({url});
        res.send(OAUTHURL);
    }

}



//const express = require('express');
//const google = require('googleapis');



