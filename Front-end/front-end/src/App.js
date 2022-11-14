
import Home from './Pages/index';
import How from './Pages/how';
//import MyRoutes from "./Pages/routes";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
//Front-end/front-end/src/Pages/routes.js
function App() {
  return (
    <> 
<div>
<Router>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/how' element={<How/>}/>
</Routes>
</Router>
</div>    

    </>

  );
} 

export default App;
