import { useState,useRouter } from 'react';
import { Key_Generator } from '../key_generator';
import crypto from "crypto";




export default function register(){

let[registered,setregistered] = useState(false);
let[genkeypair,setgenkeypair] = useState(false);
let[userpin,setuserpin] = useState("");


const generateuserkeys = async()=>{
     <Key_Generator userpin/>
}

/*
const {publicKey,privatekey} = await window.crypto.subtle.generateKey({
        algorithm:{
            name: "RSA-OAEP",
            modulusLength: 4096,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: "SHA-256"},
            extractable:true,
            keyUsages:["encrypt", "decrypt"]
    }).then((key)=>{
        return {publicKey,privateKey}
        
    }).catch((err)=>{
        console.error(err);
    })
    genkeypair(true);
const exportuserkeys = async()=>{
   const keys = await localStorage.getItem(key);
   return keys 

}*/



    return(
        <>
        
        <h2> Sign up with: </h2>
        <button onClick={generateuserkeys}> Generate Keys </button>

        </>
    )
}