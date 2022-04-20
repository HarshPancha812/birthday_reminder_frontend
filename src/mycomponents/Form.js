import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Authcontext from "../context/Authcontext";


export const Form = () => {
  const history = useHistory();
  const location = useLocation()
  const {user} = useContext(Authcontext);

  const [state, setstate] = useState(location.state);  
  console.log(state);
  const initialformdata = Object.freeze({
    name: "",
    date: "",
   
  });
  const [formdata, setformdata] = useState(state!=null?state:initialformdata);

  const haldlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handlesubmit = (e) => {
    console.log("Hello");
    console.log(formdata);
    e.preventDefault();

    const url = `http://127.0.0.1:8000/api/data/details/`;
    if (state) {
      const url1 = `http://127.0.0.1:8000/api/data/details/${user.user_id}/${formdata.id}`;
      fetch(url1, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: formdata.name,
            date: formdata.date,
        }),
      }).then((response) => {
        history.push("/birthday_data");
      });
    } 
    else {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({

          name: formdata.name,
          date: formdata.date,
          user_id:user.user_id
        }),
      }).then((response) => {
        history.push("/birthday_data");
      });
    }
    
  };

  return (
    <>
    <div className="container">
      <form
        className="middle"
        style={{ }}
      >
        <h3 className="text-center" style={{ fontFamily: "cursive" }}>
          {state?'Edit Friend':'Add Friend'}
        </h3>
        <div className="row">
          <div
            className="col-sm-12 form-group"
            style={{ padding: "20px 20px 10px 20px" }}
          >
            <label for="exampleInputEmail1">Name  </label>
            <input
              style={{ marginTop: "10px" }}
              type="text"
              name="name"
              value={formdata.name}
              onChange={haldlechange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div
            className="form-group"
            style={{ padding: "20px 20px 10px 20px" }}
          >
            <label for="exampleInputPassword1">Date</label>
            <input
              style={{ marginTop: "10px" }}
              type="date"
              name="date"
              value={formdata.date}
              onChange={haldlechange}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={handlesubmit}
          className="btn btn-primary"
          style={{ margin: "20px 10px 10px" }}
        >
          
          {state?'Edit':'Add'}
        </button>
      </form></div>
    </>
  );
};
