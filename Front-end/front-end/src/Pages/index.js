import React from 'react';
import { useNavigate } from "react-router-dom";
import Head from 'next/head';
import Navbar from "../Components/navbar";
import { Register } from './register';



export default function Home() {
  const navigate = useNavigate();

  return(
   <>
  <div>
    <Head>
      <title> Jose Ignacio </title>
    </Head>
<div>
   <Navbar/> 
</div>

<div>
  
</div>

   </div>
    
   </>

     
  )
}