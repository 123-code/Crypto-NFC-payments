import crypto from "crypto";

const data = "String";

export const Key_Generator = ()=>{
    const {publicKey,privateKey} = crypto.generateKeyPairSync("rsa",{
        modulusLength:2048,
    });
    return {publicKey,privateKey}
}


    const encryptMe = crypto.publicEncrypt({
        key:publicKey,
        padding:crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash:"sha256"
    },Buffer.from(data));

   // console.log(encryptMe);
    