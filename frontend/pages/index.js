import {React,useRef,useState,useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Web3Modal from 'web3modal';
import ethers from "ethers";
import { providers } from "ethers";
import Navbar from "./components/navbar";

//import {NFT_CONTRACT_ADDRESS,NFT_CONTRACT_ABI} from "../constants";
 
export default function Home() {
  const Web3ModalRef = useRef();
  const [walletConnected,setwalletConnected] = useState(false);


  const connectwallet = async () => {
    try {

      await getProviderOrSigner();
      setwalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  const getProviderOrSigner = async (needSigner = false) => {
    
    const provider = await Web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 5) {
      window.alert("Change the network to goerli");
      throw new Error("Change network to goerli");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

    useEffect(()=>{
      if(!walletConnected){
        Web3ModalRef.current = new Web3Modal({
          network:"goerli",
          providerOptions:{},
          disableInjectedProvider:false,
        });
        connectwallet();
      }


    },[])

    

  
    const signup = async()=>{

    }


  return(
   <div>
    <Head>
      <title> CryptoDevs NFT</title>
    </Head>
<div>
  
{!walletConnected ? (<button onClick={connectwallet}> connect wallet </button>)
: null}
    
    <div>
      <h1> Payz </h1>
      <h2> your mobile wallet </h2>

      <h3> payz allows you to send and receive crypto </h3>
      <li> Safely </li>
      <li> with a single tap </li>

      <button onClick={signup}> Signup for early access </button>
    </div>

</div>
   </div>
    
  )
}