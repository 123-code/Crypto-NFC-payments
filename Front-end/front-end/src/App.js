
import Home from './Pages/index';
import How from './Pages/how';
import Register from './Pages/register';
import Login from './Pages/Login';
import SetPin from './Pages/Set_pin';

//import MyRoutes from "./Pages/routes";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
//Front-end/front-end/src/Pages/routes.js <Route path='/Login' element={<Login/>}/>
function App() {
  return (
    <> 
<div>
<Router>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/how' element={<How/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/setpin' element={<SetPin/>}/>
</Routes>
</Router>
</div>    

    </>

  );
} 

export default App;
