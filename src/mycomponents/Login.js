import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Authcontext from "../context/Authcontext";
import { Alert } from "./Alert";

export const Login = () => {

let {loginuser} = useContext(Authcontext);
const {user} = useContext(Authcontext);


  return( <>

  <div>
    
    
    {/* {!alertmsg?<Alert/>:<p>giii</p>} */}
    
  </div>

  <div className="container">
    <form onSubmit={loginuser} className='middle' style={{}}>

            <h3 className='text-center' style={{fontFamily:"cursive"}}>Login Form</h3>
            <div className='row'>
    <div className="col-sm-12 form-group" style={{padding:"20px 10px 10px 10px"}}>
      <label for="exampleInputEmail1">Email address</label>
      <input style={{marginTop:"10px"}} type="email" name="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      
    </div>
    <div className="form-group" style={{padding:"20px 10px 10px 10px"}}>
      <label for="exampleInputPassword1" >Password</label>
      <input style={{marginTop:"10px"}} type="password" name="password"  className="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    </div>
    <button type="submit" className="btn btn-primary" style={{margin:"20px 0px 10px"}}>Login</button>
    <Link to="/register" className="btn btn-primary" style={{margin:"20px 10px 10px "}}>Register</Link>
  </form>
  </div></>
  );
};
