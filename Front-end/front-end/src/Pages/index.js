import React from 'react';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {FaEthereum} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
//import Navbar from "../Components/navbar";

const How = ()=>{
  return(
    <>
      <div className="w-full p-4 shadow-md lg:max-w-lg">
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                    How it will work 
                </h3>
                <p className="text-blue-600">
                  once you sign-up using the apps you already know, as a user we will mint a 
                  soulbound token, representing your account. You authenticate with your web2 account and an ethereum wallet 
                  is created for you. 

                  your private keys will be stored locally, and you'll be able to unlock
                  your accoutn via passkeys:

                  you either, enter your PIN, or provide biometric  authentication, and you'll 
                  have access to your wallet 

                  once you add funds, a function will be trigerred on our ERC-20 smart contract, an d for each dollar, a 1:1 pegged stablecoin
                  will be minted, giving you acces tio your digital dollars, in a permissionless and decentralized way.

                  you will be able to make payments:
                  via NFC
                  via QR code
                  via username
          
                </p>
          
            </div>
        </div>
    
    </>
  )
}


const Home = ()=>{
  return(
   <>
  <div>
    <body className = "bg-cyan-500 " >
    <h1 className = "font-bold text-6xl font-mono " > Easy payments for anyone, 
    <div>
    </div>at anytime </h1>

    <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex "> Register Now  </button>

    </body>
    <div className = "inline-flex">
    <div className="w-full p-4 shadow-md lg:max-w-lg flex items-stretch flex-1 text-center px-4 py-2 m-2" >
            <div className="space-y-2 ">
                <h3 className="text-2xl font-semibold">
                    Your go to financial app
                </h3>
                <p className="text-blue-600">
                    we are building a permissionless, fast and safe payment system aimed at the unbanked.
                </p>
            </div>
        </div>

        <div className="w-full p-4 shadow-md lg:max-w-lg flex items-stretch flex-1 text-center px-4 py-2 m-2 ">
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                    Your dollars on your mobile phone, at anytime 
                </h3>
                <p className="text-blue-600">
                    By signing up with an existing google, or apple account, 
                    you will create one of our wallets
                </p>
                <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  flex-col items-center"> See how it works  </button>
            </div>
        </div>

        <div className="w-full p-4 shadow-md lg:max-w-lg flex-1 text-center px-4 py-2 m-2 ">
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                    Get Notified
                </h3>
                <p className="text-blue-600">
                  get notified of our launch dates by subscribing
                </p>
                <input className = "block text-sm font-medium text-slate-700" type = "email" placeholder = "your email address"></input>
                <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounde"> Subscribe  </button>
            </div>
        </div>

    </div>
    <How/>
   </div>
   <footer className = "bg-cyan-500 ">
    <div>

    </div>
    <h1> Reach us at: </h1>
    <div className="inline-flex">
    <AiOutlineTwitter/>
   <AiFillGithub/>
   <AiFillLinkedin/>
   <FaEthereum/>
    </div>
    <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex "> Register Now  </button>
   </footer>
  
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
