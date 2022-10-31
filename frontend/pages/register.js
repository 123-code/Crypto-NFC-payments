import { useState,useRouter } from 'react';
import { Key_Generator } from '../key_generator';





export default function register(){

let[registered,setregistered] = useState(false);
let[genkeypair,setgenkeypair] = useState(false);
let[userpin,setuserpin] = useState("");



const generateuserkeys = (e)=>{
    const router = useRouter();
     e.preventDefault()
     router.push("/pin");
}
    return(
        <>

        <h2> Sign up with: </h2>
        <button onClick={generateuserkeys}> Generate Keys </button>

        </>
    )
}