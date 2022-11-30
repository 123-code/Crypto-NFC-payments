import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Register = ()=>{
  const[googleOauthurl,setgoogleOauthurl] = useState('');
  const client = axios.create({
    baseURL:"http://localhost:3000/auth/google/url"
  });

  useEffect(()=>{
const loadoauthurl = async()=>{
  try{
const response = await axios.get('http://localhost:3000/auth/google/url');
const {url} =  response.data;
setgoogleOauthurl(url);
  }catch(err){
console.error(err);
  }
}
loadoauthurl();
  },[])

return(
  <>
  <h2> Signup with: </h2>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  disabled={!googleOauthurl}
  onClick={()=>{window.location.href=googleOauthurl}}
  > Sign Up with google </button>
  </>
)
}
export default Register;
/*
  <h2> Signup with: </h2>
  <button
  disabled={!googleOauthurl}
  onClick={()=>{window.location.href=googleOauthurl}}
  > Sign Up with google </button>
*/