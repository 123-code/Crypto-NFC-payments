import {useState,useRouter} from 'react';
import { Key_Generator } from '../key_generator';

export const PIN = ()=>{

/*
Pass pin as a prop to key_generator, and encrypt
the password and the private key, save to device 
*/


const encryptdata = async(password)=>{
    try{
Key_Generator(password)

    }
    catch(err){
        console.error(err)
    }

}

    const [pin,setpin] = useState();
    const okbutton = ()=>{
        const router = useRouter();
        router.push("/created")
    }
    const savepin = ()=>{
    localStorage.setItem(pin);
    }
    
    return(
        <>
<h1> In order to secure your wallet, you will need a PIN </h1>
<h2> enter four digit PIN here </h2>
<input type="password" placeholder="PIN" onChange={(e)=>{setpin(e.target.value)}}/>
<button onClick={okbutton}> OK </button>
{savepin()}
        </>
    )
}

