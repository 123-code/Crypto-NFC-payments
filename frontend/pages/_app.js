import '../styles/globals.css';
import {Routes} from ".//routes";
import  Navbar from './components/navbar';
// 

function MyApp({ Component, pageProps }) {
  return(
    <>
   
   <Component {...pageProps} />
   <Navbar/>

    
    </>
  ) 
}

export default MyApp
// <Component {...pageProps} />