import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Register } from "./mycomponents/Register";
import './App.css';
import { Login } from "./mycomponents/Login";

import { BirthdayData } from "./mycomponents/BirthdayData";
import { Form } from "./mycomponents/Form";
import PrivateRoute from "./utils/PrivateRoute";
import { Authprovider } from "./context/Authcontext";
import { Content } from "./mycomponents/Content";
import { Navbar } from "./mycomponents/Navbar";
import { Home } from "./mycomponents/Home";


function App() {

  return (
   
      <Router>
        {/* <h3 className="text-center" style={{marginTop:"40px"}}>Welcome to Birthday Reminder App</h3> */}
        
        <Switch>
        <Authprovider>
          <Navbar/>
      <div className="cons">
            <PrivateRoute  path="/birthday_data" component={BirthdayData} exact/>
            <PrivateRoute  path="/form" component={Form } exact/>
            <Route component={Home} path="/" exact/>

           
                
            <Route exact path="/register" component={Register} exact/>
            <Route exact path="/content" component={Content} exact/>
         
          
            <Route exact path="/login">
                <Login />
            </Route>
           {/* <Route exact path="*" component={Error} /> */}
           
           </div>
          
           
          </Authprovider>
        </Switch>
        </Router>
    
  );
}

export default App;
