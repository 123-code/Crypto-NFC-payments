import { Routes ,Route } from 'react-router-dom';
import Home from './index';
import About from './about_us';
import How  from './how';


const MyRoutes = () => {
    return (
        <Routes>
            
                <Route path="/" component={Home} exact/>
                   
              
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/how">
                    <How/>
                </Route>
           
        </Routes>
    );
} 
export default Routes;
/*
<Route path="/register" component={Register}>
                    <Register/>
                    </Route>

                     <Route path="/pin" component={Set_pin}>
                    <Set_pin/>
                </Route>

*/