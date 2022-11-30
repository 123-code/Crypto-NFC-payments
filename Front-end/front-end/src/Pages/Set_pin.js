import { useState } from 'react';
import { useKey_generator } from '../util/key_generator';





const Set_pin = ()=>{
        const [pin,setpin] = useState([]);
        const account_generator = useKey_generator();
        // test code 
        console.log(account_generator);


        const Inputpin  = ()=>{
            return(
            <>
            <div>
          <form>
            <input onChange={(e)=>{setpin(e.target.value)}} type="password" maxLength="1" />
            <input onChange={(e)=>{setpin(e.target.value)}} type="password" maxLength="1"/>
            <input onChange={(e)=>{setpin(e.target.value)}} type="password" maxLength="1" />
            <input onChange={(e)=>{setpin(e.target.value)}}  type="password" maxLength="1" />
          </form>
        </div>
            </>
            )
        }
 
    return(
        <>
<Inputpin/>
<button> OK </button>
        </>
    )
} 
export default Set_pin; 