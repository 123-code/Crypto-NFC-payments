import { Routes ,Route } from 'react-router-dom';
import Home from './index';
import About from './about_us';
import How  from './how';
import Register from './Register';



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

                <Route path="/register">
                    <Register/>
                </Route>
               
        </Routes>
    );
} 
export default MyRoutes;
/*
<Route path="/register" component={Register}>
                    <Register/>
                    </Route>

                     <Route path="/pin" component={Set_pin}>
                    <Set_pin/>
                </Route>

*/