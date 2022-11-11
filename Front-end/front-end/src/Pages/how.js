import React from 'react';
export default function How(){
    return(
<>
<div className ="bg-gradient-to-t from-gray-100 to-gray-300">
    <h1 className="font-sans text-justify text-3xl  font-extrabold "> How will it work? </h1>
<h3 className="font-mono text-justify ">
... is a decentralized and permissionless blockchain-based payment system.

<div>
we ,provide a seamless and frictionless payment experience by letting users safely 
    send money with a single tap. 
    We do it by harnessing NFC chips inside smartphones.
 </div>


<div>
 
</div>
    If the smartphone does not have one, we provide cheap, external chips. 
    <h1 className="font-sans text-justify text-2xl font-extrabold "> An easy to use crypto wallet </h1>
<div>
        We simplify the crypto user experience for the user
        by allowing users to sign in/ sign up with their existing Web2 accounts.
        once an account is created, a public-private key pair is generated. The user has created a crypto wallet
        using the tools they already know.
        The user will be asked to create a PIN, their keys will be encrypted and stored
        on their local device. when they want to use their wallets for big transactions, 
        they will be asked for their PIN. 

        

        


    </div>
   
<div>
<h1 className="font-sans text-justify text-2xl font-extrabold "> A L2 based payment app</h1>
... will work based on an ERC 20 contract deployed on a Layer 2, giving us the fast and cheap
transactions we need on a payment system. Money can be added to the system in three main ways for Now


<li> Via cash deposit </li>
<li> Via pay-pal </li>
<li> Via stripe-API </li>

once money is added, a mint function will be invoked on the smart contract, and you 
will see your digital dollars on your screen.

another function has to be invoked on the ERC-20 smart contract for the transfer and withdrawal operations.
<h1 className="font-sans text-justify text-2xl font-extrabold "> A user Friendly-UI</h1>
A react/react-native frontend will help connecting the user to the smart contract functions 
the experience will be very similar to the payment apps they alraedy know, the difference is that they will be using a
fully decentralized financial service.
</div> 
<h1 className="font-sans text-justify text-2xl font-extrabold "> How it will help the underbanked</h1>
<div>
    basically we are creating a bank account that is owned by the user, they will be enjoying 
    a fast, reliable and permissionless app, that will allow them to overcome the current
    burdens placed by the financial system in Latin America. 
</div>
</h3>



</div>

</>

        )
}