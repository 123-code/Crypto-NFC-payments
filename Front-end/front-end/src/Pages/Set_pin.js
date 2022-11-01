import { useState } from 'react';
import { Key_Generator } from '../Components/key_generator';

const Set_pin = ()=>{
        const [pin,setpin] = useState("");
 
    return(
        <>
<input  onChange = {(e)=>{setpin(e.target.value)}}type="password" placeholder="Password"/>
<button onClick={Key_Generator(pin)}> OK </button>
        </>
    )
} 
export default Set_pin; 