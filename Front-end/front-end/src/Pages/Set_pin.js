import React,{useState} from 'react';
import PinInput from "react-pin-input";
import bcrypt from 'bcryptjs';

export default function App() {

const Encryptpin = ()=>{
  const salt = bcrypt.genSalt(10,function(err,salt){
 bcrypt.hash(setPIN[0],salt,function(err,hash){
try{
  console.log('unhashed:',setPIN[0])
console.log('hash:',hash)
}catch(err){
  console.error(err);
}
 })
})
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
      <button onClick={Encryptpin}>Encrypt</button>
      </>

  );
}

//...pin,  setpin

