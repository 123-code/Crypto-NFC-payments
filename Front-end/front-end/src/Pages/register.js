import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useKey_generator} from '../util/key_generator';
import images from '../images.png';


//Front-end/front-end/src/images.png
const Register = ()=>{
  const[googleOauthurl,setgoogleOauthurl] = useState('');
  const[authenticated,setauthenticated] = useState(false);
  const generator = useKey_generator();
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

 <h2 className=" font-extrabold font-mono"> Sign-up with: </h2>
  <div className="grid grid-cols-3 gap-4 place-items-center h-56">
  <button  className=" padding-left: 45px bg-blue-500 hover:bg-blue-700 text-white font-roboto py-2 px-4 rounded"
  disabled={!googleOauthurl}
  onClick={()=>{window.location.href=googleOauthurl}}
  > 
  <div id="gSignInWrapper">
    <span className="label">Sign up with </span>
    <div id="customBtn" className="customGPlusSignIn">
   
      <span className="icon"> <img href={images} alt=" "/></span>
      <span className="buttonText">Google</span>
      
    </div>
  </div>
   </button>
</div>


 
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