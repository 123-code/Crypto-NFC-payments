import React from 'react';
import { useNavigate } from 'react-router-dom';
//import Navbar from "../Components/navbar";

const Home = ()=>{
  return(
   <>
  <div>
    <body className = "bg-cyan-500">
    <h1 className = "font-bold text-6xl font-mono"  > Easy payments for anyone, 
    <div>
    </div>at anytime </h1>

    <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Register Now  </button>

    </body>

    <div className="w-full p-4 shadow-md lg:max-w-lg">
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                    Your go to financial app
                </h3>
                <p className="text-blue-600">
                    we are building a permissionless, fast and safe payment system aimed at the unbanked.
                </p>
            </div>
        </div>

  <div className="w-full p-4 shadow-md lg:max-w-lg">
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                    Your dollars on your mobile phone, at anytime 
                </h3>
                <p className="text-blue-600">
                    By signing up with a web2 account, an ethereum wallet will be created for you.
                    we are bringing unbanked, web2 users to the benefits of web3
                  
                </p>
                <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounde"> See how it works  </button>
            </div>
        </div>


        <div className="w-full p-4 shadow-md lg:max-w-lg">
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                    OWN your bank account
                </h3>
                <p className="text-blue-600">
                  once you sign-up using the apps you already know, as a user we will mint a 
                  soulbound token, representing your account.
                </p>
          
            </div>
        </div>

        <div className="w-full p-4 shadow-md lg:max-w-lg">
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
