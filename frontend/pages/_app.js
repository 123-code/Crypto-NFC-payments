import '../styles/globals.css';
import {Routes} from ".//routes";

function MyApp({ Component, pageProps }) {
  return(
    <>
   
   <Component {...pageProps} />

    
    </>
  ) 
}

export default MyApp
// <Component {...pageProps} />