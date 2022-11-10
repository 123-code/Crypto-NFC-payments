import React from 'react';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {FaEthereum} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useKey_generator } from '../util/key_generator';
import { Link } from 'react-router-dom';
import {AiFillDollarCircle} from 'react-icons/ai';
import {GoAlert} from 'react-icons/go'
import {GiThreeFriends} from 'react-icons/gi';
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



const Pagebody = ()=>{
    const style = {fontSize: "5.9em" }
  return(
    <>
    <div class="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10 responsive">
        <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">


            <div
                class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                    
                    <GoAlert style={style}/>
            
                <p class="text-xl font-medium text-slate-700 mt-3">The current Banking system has a flaw:</p>
                <p class="mt-2 text-sm text-slate-500">
                "Today, 70% of LatAm's population remains unbanked or underbanked, and 58% of point of sale purchases are still made in cash"
                <div>
                  <h3> forbes  </h3>
                </div>

                </p>
            </div>

            <div
                class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
               <AiFillDollarCircle style={style} />
                <p class="text-xl font-medium text-slate-700 mt-3">Save and spend your digital dollars
                    </p>
                <p class="mt-2 text-sm text-slate-500">we are creating a decentralized, permissionless
                financial app for those who want easy access to their money. Send it as easy as a tap</p>
            </div>


            <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <GiThreeFriends style={style}/>
                <p class="text-xl font-medium text-slate-700 mt-3">Your friends & your money in one place</p>
                <p class="mt-2 text-sm text-slate-500">
                    easily pay friends anywhere, at anytime
                    </p>
            </div>
            
</div>
</div>

    </>

  )}
const Footer = ()=>{
  return(
    <footer className="bg-gray-200 text-center lg:text-left">
  <div className="text-gray-700 text-center p-4">
    Reach us at:
    <div className="inline-flex">
    <AiOutlineTwitter/>
   <AiFillGithub/>
   <AiFillLinkedin/>
   <FaEthereum/>
    </div>
    <a className="text-gray-800" href="https://tailwind-elements.com/"></a>
  </div>
</footer>
  )
}
  


const Home = ()=>{
  return(
   <>
  <div>

  <nav id="header" class="w-full z-30 top-10 py-1 bg-white shadow-lg border-b border-blue-400 mt-24">
      <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
         <label for="menu-toggle" class="cursor-pointer md:hidden block">
            <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>

         
         <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
               <ul class="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                  <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Home</a></li>
                  <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">How it works</a></li>
                  <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Access</a></li>
               </ul>
            </nav>
         </div>
         
         <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div class="auth flex items-center w-full md:w-full">
               <button class="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
               <button class="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button>
            </div>
         </div>
      </div>
    
   </nav>
    
    <body className = "bg-cyan-500 " >
    <h1 className = "text-6xl font-mono  font-extrabold text-white sm:text-3xl md:text-5xl mb-2 " > Easy payments for anyone, 
    <div>
    </div>at anytime </h1>

    <button onClick = {useKey_generator}className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex "> Register Now  </button>

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
<Pagebody/>

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
