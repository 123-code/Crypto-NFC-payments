import {React,useRef,useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import { useRouter } from 'next/router'
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Web3Modal from 'web3modal';
import ethers from "ethers";
import { providers } from "ethers";
import Navbar from "./components/navbar";
import Link from 'next/link';
import { Register } from './register';


//import {NFT_CONTRACT_ADDRESS,NFT_CONTRACT_ABI} from "../constants";
 
export default function Home() {

  function ActiveLink(){
    const router = useRouter();

    const handleclick = (e)=>{
      e.preventDefault()
      router.push("/register")
    }
    return(
      <button onClick={handleclick}> Register for early access  </button>
    )
  }

  return(
   <>
  <div>
    <Head>
      <title> </title>
    </Head>
<div>

    
    <div>
   <Navbar/>
      
     

    </div>

</div>
   </div>
    

<ActiveLink/>
   </>

     
  )
}
//<Renderbutton/>