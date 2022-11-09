
import { ethers } from 'ethers';



    export const useKey_generator = ()=>{

        const wallet = ethers.Wallet.createRandom()
        console.log('address:', wallet.address);
        console.log('public key:',wallet.publicKey);
        console.log('privateKey:', wallet.privateKey)
        return wallet.address
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