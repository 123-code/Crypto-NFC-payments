import { useState,useEffect,useHistory } from 'react';
import { useQueryParams } from '../util/useQueryParams';
//Front-end/front-end/auth/useToken.js
import {useToken} from '../auth/useToken.js'
export default function Login(){
    const{token:oauthToken} = useQueryParams();
    const [token,settoken] = useToken();
    
    const history = useHistory();

    useEffect(()=>{
if(oauthToken){
    settoken(oauthToken);
    history.push("/");
}
    },[oauthToken,settoken,history])
    return(
        <>
<h1> Login with: </h1>
<button> login with google </button>

        </>
    )
}