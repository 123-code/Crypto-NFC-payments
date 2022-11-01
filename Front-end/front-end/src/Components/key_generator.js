import { useState } from "react";
import crypto from "crypto";


export const Key_Generator = (props)=>{
    const [pin,setpin] = useState("");
    const data = props;
    const {publicKey,privateKey} = crypto.generateKeyPairSync("rsa",{
        modulusLength:2048,
    });
    const encryptMe = crypto.publicEncrypt({
        key:privateKey,
        padding:crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash:"sha256"
    },Buffer.from(data));

    const decrypt = crypto.publicDecrypt({

    })
    encryptMe();
    console.log(encryptMe) 

    return(
    <>
    </>
    )

}






    