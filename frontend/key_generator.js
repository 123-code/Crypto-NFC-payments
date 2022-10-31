import crypto from "crypto";



export const Key_Generator = (props)=>{
    const data = props;
    const {publicKey,privateKey} = crypto.generateKeyPairSync("rsa",{
        modulusLength:2048,
    });
    const encryptMe = crypto.publicEncrypt({
        key:publicKey,
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
    return {publicKey,privateKey}
  
}

{Key_Generator()}




    