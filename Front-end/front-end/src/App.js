
import Home from './Pages/index';
import MyRoutes from "./Pages/routes";
import './App.css';
//Front-end/front-end/src/Pages/routes.js
function App() {
  return (
    <> 

    <Home/>
    <div className="w-full p-4 shadow-md lg:max-w-lg">
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                    React Tailwind Card Title
                </h3>
                <p className="text-blue-600">
                    react with tailwind css simple card It is a long established
                    fact that a reader will be distracted.
                </p>
            </div>
        </div>

    </>

  );
}

export default App;
