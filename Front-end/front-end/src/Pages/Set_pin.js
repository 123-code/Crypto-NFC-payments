import { useState } from 'react';
import { useKey_generator } from '../util/key_generator';





const SetPin = ()=>{
        const pinnumber = [];
        const [num1,setnum1] = useState();
        const [num2,setnum2] = useState();
        const [num3,setnum3] = useState();
        const [num4,setnum4] = useState();
        //const account_generator = useKey_generator();
        // test code 
       // console.log(account_generator);

       const saveinfo = ()=>{
      pinnumber.push(num1)
      pinnumber.push(num2)
      pinnumber.push(num3)
      pinnumber.push(num4)
      console.log(pinnumber)
       }
       console.log(pinnumber)

        const Inputpin  = ()=>{
            return(
            <>
            <div>
          <form >
            <input className= ' h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl'  onChange={(e)=>{setnum1(e.target.value)}} type="password" maxLength="1" />
           
            <input className= 'h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl' onChange={(e)=>{setnum2(e.target.value)}} type="password" maxLength="1" />
      
            <input className= 'h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl' onChange={(e)=>{setnum3(e.target.value)}} type="password" maxLength="1" />
        
            <input className= 'h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl' onChange={(e)=>{setnum4(e.target.value)}} type="password" maxLength="1" />
           
            
          </form >
        </div>
            </>
            )
        }

    return(
        <>
         
<Inputpin/>
<button onClick={saveinfo}> OK </button>
        </>
    )
} 
export default SetPin; 