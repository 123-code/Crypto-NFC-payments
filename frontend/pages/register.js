import { useState,useRouter } from 'react';
import crypto from "crypto";
//import { subtle } from 'globalThis.crypto';
//import { SubtleCrypto } from 'subtle-crypto';



export default function register(){

let[registered,setregistered] = useState(false);
let[genkeypair,setgenkeypair] = useState(false);
let[userpin,setuserpin] = useState("");


const generateuserkeys = async()=>{
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
        localStorage.setItem(publicKey,privateKey);
    }).catch((err)=>{
        console.error(err);
    })
    genkeypair(true);
}

const exportuserkeys = async()=>{
   const keys = await localStorage.getItem(key);
   return keys 

}


    return(
        <>
        <h2> Sign up with: </h2>
        <button onClick={generateuserkeys}> Generate Keys </button>

        </>
    )
}