import { useState } from "react";
import { ethers } from 'ethers';
import crypto from "crypto";

const renderbutton =()=> {
    const Key_generator = ()=>{
        
       const id = crypto.randomBytes(32).toString('hex');
       const privateKey = "0x" + id;
       console.log(`privatekey:${privateKey}`)
       const wallet = new ethers.Wallet(privateKey);
       console.log('your address:'+ wallet.address )
       
           }

    const onkeygeneration = async()=>{
       

        try{
            Key_generator();
            
        }
        catch(err){
            console.error(err);
        }
    }
    return(
        <>
        <button Onclick = {onkeygeneration}> Generate Keys </button>
        </>
    )
}

/*

const testkeys = () =>{
        const encrypt = new JSEncrypt();
        const crypto = new JSEncrypt({default_key_size: 2048});
        const publicprivatekey = {
            PublicKey:crypto.getPublicKey(),
            PrivateKey:crypto.getPrivateKey()
        };
    
        const publicKey = publicprivatekey.PublicKey;
        const privateKey = publicprivatekey.PrivateKey;
    
        console.log(publicKey);
        console.log(privateKey);
    }
    
    testkeys()
  

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

    export const Key_Generator = (props)=>{}


*/