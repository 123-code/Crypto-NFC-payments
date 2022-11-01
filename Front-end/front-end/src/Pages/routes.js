import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './index';
import { About } from './about_us';
import { How } from './how';
import { Register } from './register';
import { Set_pin } from './Set_pin';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/how">
                    <How/>
                </Route>
                <Route path="/register" component={Register}>
                    <Register/>
                    </Route>

                <Route path="/pin" component={Set_pin}>
                    <Set_pin/>
                </Route>

            </Switch>
        </Router>
    );
} 
export default Routes;