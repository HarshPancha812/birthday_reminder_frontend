import React ,{ useContext } from 'react';
import {
   
    Route,
   Redirect 
  } from "react-router-dom";
import Authcontext from '../context/Authcontext';


const PrivateRoute = ({children,...rest}) => {
  const {user} = useContext(Authcontext)
  return (
  
  <Route {...rest}>{!user?<Redirect to="/login" /> : children}</Route>  );
};

export default PrivateRoute;

