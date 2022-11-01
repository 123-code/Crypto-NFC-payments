import React from 'react';
import { useNavigate } from "react-router-dom";

const Register = ()=>{
const navigate = useNavigate();

const handleclick = ()=>{
  navigate("/pin")
}
// handle Oauth here 
return(
  <>
  <h2> Sign up with: </h2>
<button onClick={handleclick}> OK </button>
  </>
)
}
export default Register;