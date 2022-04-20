import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { axiosInstance } from "../axios";

export const Register = () => {
  const history = useHistory();
  const initialformdata = Object.freeze({
    email : '',
    first_name : '',
    last_name : '' ,
    password : ''
  })
  const [formdata, setformdata] = useState(initialformdata);

  const haldlechange = (e)=>{
    setformdata({
      ...formdata,
      [e.target.name] : e.target.value.trim()
    })
  }

  const handlesubmit = (e)=>{
    console.log("Hello");
    console.log(formdata);
    e.preventDefault();
    axiosInstance.post(`user/register/`,{
      email : formdata.email,
      first_name : formdata.first_name,
      last_name : formdata.last_name,
      password : formdata.password,
    })
    .then((res)=>{
      history.push('/login');
      console.log(res.data);
    })
  }
  return (
    <>
    <div className="container">

      <form className='middle' 
        style={{}}>
      
        <h3 className="text-center" style={{fontFamily:"cursive"}}>Registration Form</h3>

        <div className="row form-group" style={{ padding: "20px 10px 10px 10px" }}>
          <div className="col-md-6">
            <label for="exampleInputEmail1">First Name :</label>
            <input
              style={{ marginTop: "10px" }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="first_name"
              aria-describedby="emailHelp"
              placeholder="Enter first name"
              onChange={haldlechange}
            />
          </div>
          <div className="col-md-6">
            <label for="exampleInputEmail1">Last Name :</label>
            <input
              style={{ marginTop: "10px" }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="last_name"
              aria-describedby="emailHelp"
              placeholder="Enter last name"
              onChange={haldlechange}
            />
          </div>
        </div>
        <div className="form-group" style={{ padding: "20px 10px 10px 10px" }}>
          <label for="exampleInputEmail1">Email address</label>
          <input
            style={{ marginTop: "10px" }}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={haldlechange}
          />
        </div>
        <div className="form-group" style={{ padding: "20px 10px 10px 10px" }}>
          <label for="exampleInputPassword1">Password</label>
          <input
            style={{ marginTop: "10px" }}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={haldlechange}
          />
        </div>

        <div className="form-group" style={{ padding: "0px  20px 10px 10px" }}>
              <button type="submit" style={{margin:"20px 0px 10px"}} className="btn btn-primary" onClick={handlesubmit} >Register</button>
              <Link to="/login" style={{margin:"20px 10px 10px"}} className="btn btn-primary" >Login</Link>
        </div>
      </form>
      </div>
    </>
  );
};
