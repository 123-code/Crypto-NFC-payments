import React from 'react';
import { useNavigate } from 'react-router-dom';
//import Navbar from "../Components/navbar";

const Home = ()=>{
  return(
   <>
  <div>
    <body className = "bg-cyan-500">
    <h1 className = "font-bold text-6xl"  > Easy payments for anyone, 
    <div>
    </div>at anytime </h1>

    <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Register Now  </button>

<div>

</div>

<div>


</div>
    </body>
    

   </div>
  
   </>

     
  )
}
export default Home;


/*
<ActiveLink/>
const ActiveLink = ()=>{
    const navigate = useNavigate();
    return(
      <>
      <button onClick={navigate.push("/register")}> Register </button>
      </>
    )
  }
*/
