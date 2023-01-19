import React,{useState} from 'react';
import PinInput from "react-pin-input";
import bcrypt from 'bcryptjs';
import {useNavigate} from 'react-router-dom';


export default function App() {
  const navigate = useNavigate();


  const checkLength = (str)=>{
    if(str.length === 4){
      return true
    }else{
      return false
    }
  }
  
  const Encryptpin = ()=>{
    try{
      if(checkLength){
        const salt = bcrypt.genSalt(10,function(err,salt){
          bcrypt.hash(setPIN[0],salt,function(err,hash){
        
          console.log('unhashed:',setPIN[0])
        console.log('hash:',hash)
        
          })
        })
        navigate('/account');
      }
      else{
        throw new Error("Pin must be 4 digits")
      }
      
    }catch(err){
      console.error(err)
    }
  
  }

  const [pin,setpin] = useState({ num1: "", num2: "", num3: "", num4: "" })
  const setPIN = [0,0,0,0]
  return (
      <>
          <div className="App">     
        <PinInput length={4} focus type="password" inputMode="password"
        onChange={(value, index,key=0) => {
            setpin(...pin + { [`num${index +1}`]: value });
            console.log(index);
            setPIN[key] = value
            key++;
            console.log("Pin:",setPIN);
        }} 
        />
      </div>
      <button onClick={Encryptpin}>OK</button>
      </>

  );
}

//...pin,  setpin

