// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Addemployee from './Components/Addemployee';
import Employeedetails from './Components/Employeedetails'
import Updateemployee from './Components/Updateemployee';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path="/">     
              <Home/>
            </Route>
            <Route path="/addemployee">
						< Addemployee/>
					</Route>
          <Route path="/employeedetails:empid">
						<Employeedetails/>
					</Route>
          <Route path="/updateemployee:empid">
						<Updateemployee/>
					</Route>
            

    </Switch>
    
    </BrowserRouter>
    </>
    
  );
}

export default App;
