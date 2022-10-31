import { useState } from 'react';
import { Key_Generator } from '../key_generator';

const setmypin = ()=>{
        
    return(
        <>
<input  onChange = {setpin((e)=>{e.target.value})}type="password" placeholder="Password"/>
<button onClick={Key_Generator(pin)}> OK </button>
        </>
    )
}