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



export default function Home() {

  function ActiveLink(){
    const router = useRouter();

    const handleclick = (e)=>{
      e.preventDefault()
      router.push("/register")
    }

    const handlehowclick = (e)=>{
      e.preventDefault()
      router.push("/how")
    }
    return(
      <>
      <h1> 
        Easy Payments for anyone,
        at anytime  
        </h1>

      <button onClick={handleclick}> Create My Wallet  </button>

      <button onClick={handlehowclick}> See how it works </button>
      </>
    )
  }

  return(
   <>
  <div>
    <Head>
      <title> </title>
    </Head>
<div>

   <Navbar/>
      
</div>
   </div>
    

<ActiveLink/>
   </>

     
  )
}
//<Renderbutton/>