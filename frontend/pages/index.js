import {React,useRef,useState,useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Web3Modal from 'web3modal';
import ethers from "ethers";
import { providers } from "ethers";
import Navbar from "./components/navbar";
import Link from 'next/link';


//import {NFT_CONTRACT_ADDRESS,NFT_CONTRACT_ABI} from "../constants";
 
export default function Home() {
  return(
   <div>
    <Head>
      <title> Payz </title>
    </Head>
<div>
  
{!walletConnected ? (<button onClick={connectwallet}> connect wallet </button>)
: null}
    
    <div>
   <Navbar/>
      
      <h1> Payz </h1>
      <h2> your mobile wallet </h2>

      <h3> payz allows you to send and receive crypto </h3>
      <li> Safely </li>
      <li> with a single tap </li>

<Link href = "./register"> Register for early access </Link>
    </div>

</div>
   </div>
    
  )
}