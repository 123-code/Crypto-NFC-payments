import React,{useState} from 'react';
import PinInput from "react-pin-input";

export default function App() {
  const [pin,setpin] = useState({ num1: "", num2: "", num3: "", num4: "" })
  const setPIN = [0,0,0,0]
  return (
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
  );
}

//...pin,  setpin

