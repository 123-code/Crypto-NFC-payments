
import {ethers,providers} from 'ethers';
import {COIN_POLYGON_ADDRESS,COIN_POLYGON_ABI} from '../constants';

const Account = ()=>{

    const getcontractOwner = ()=>{

   
  
        
}

return(
    <>

    </>
)
}
export default Account


import {React,useRef,useState,useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Web3Modal from 'web3modal';
import ethers from "ethers";
import { providers } from "ethers";

import {NFT_CONTRACT_ADDRESS,NFT_CONTRACT_ABI} from "../constants";
 
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
    if (chainId !== 4) {
      window.alert("Change the network to rinkeby");
      throw new Error("Change network to rinkeby");
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
          network:"rinkeby",
          providerOptions:{},
          disableInjectedProvider:false,
        });
        connectwallet();
      }


    },[])

  


  return(
   <div>
    <Head>
      <title> CryptoDevs NFT</title>
    </Head>
<div className={styles.main}>
  
{!walletConnected ? (<button onClick={connectwallet} className={styles.button}> connect wallet </button>)
: null}
    

</div>
   </div>
    
  )
}