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
<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
<h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
</div>

   </div>
    
   </>

     
  )
}