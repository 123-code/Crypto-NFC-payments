// stores & gets tokens from localstorage
import { useState } from 'react';

export const useToken = ()=>{
    // compute initial state 
    const [token,settokeninternal] = useState(()=>{
        //if token on LS get it, otherwise get nothing
return localStorage.getItem('token');

    })
    const newtoken = newToken =>{
        localStorage.setItem(newtoken)
        settokeninternal(newToken);
    }

    return [token,newtoken];
}