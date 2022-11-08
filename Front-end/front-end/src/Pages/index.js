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



const Pagebody = ()=>{

  return(
    <>
    <div class="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10 responsive">
        <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">


            <div
                class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span class="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg></span>
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
                <span class="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg></span>
                <p class="text-xl font-medium text-slate-700 mt-3">Save and spend your digital dollars
                    </p>
                <p class="mt-2 text-sm text-slate-500">we are creating a decentralized, permissionless
                financial app for those who want easy access to their money. Send it as easy as a tap</p>
            </div>


            <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span class="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg></span>
                <p class="text-xl font-medium text-slate-700 mt-3">Admission process Guidance</p>
                <p class="mt-2 text-sm text-slate-500">Professional Advice for higher education abroad and select the
                    top institutions worldwide.</p>
            </div>
            
</div>
</div>





    </>


  )}

  


const Home = ()=>{
  return(
   <>
  <div>
    <body className = "bg-cyan-500 " >
    <h1 className = "text-6xl font-mono  font-extrabold text-white sm:text-3xl md:text-5xl mb-2 " > Easy payments for anyone, 
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
<Pagebody/>

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
