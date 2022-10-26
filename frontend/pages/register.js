import { useState,useRouter } from 'react';
import crypto from "crypto";
//import { SubtleCrypto } from 'subtle-crypto';



export default function register(){
crypto === window.crypto
let[registered,setregistered] = useState(false);
let[genkeypair,setgenkeypair] = useState(false);
let[userpin,setuserpin] = useState("");


const generateuserkeys = async()=>{
     let keypair = await crypto.subtle.generateKey({
        algorithm:{
            name: "RSA-OAEP",
            modulusLength: 4096,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: "SHA-256"},
            extractable:true,
            keyUsages:["encrypt", "decrypt"]
    }).then((key)=>{
        return key
    })
    genkeypair(true);
}


    return(
        <>
        <h2> Sign up with: </h2>
        <button onClick={generateuserkeys}> Generate Keys </button>

        </>
    )
}