import { useState } from "react";
import crypto from "crypto";







export const Key_Generator = ()=>{

    const setmypin = ()=>{
        const [pin,setpin] = useState("");
        return(
            <>
    <input  onChange = {setpin((e)=>{e.target.value})}type="password" placeholder="Password"/>
    <button onClick={Key_Generator(pin)}> OK </button>
            </>
        )
    }



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
    //decrypt();
    //console.log(privateKey.toString("hex"))
    //localStorage.setItem('privatekey',privateKey);
    //console.log(encryptMe)

    return(
        setmypin()
    )

}






    