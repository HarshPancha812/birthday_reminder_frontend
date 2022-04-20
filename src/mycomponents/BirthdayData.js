import React, { Component, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Authcontext from "../context/Authcontext";
import male from './male.png';



export const BirthdayData = () => {

  const [lists, setlists] = useState([]);

  const {user} = useContext(Authcontext);
  const {logout} = useContext(Authcontext);
  const fetchdata = () => {
    fetch(`http://127.0.0.1:8000/api/data/details/${user.user_id}`)
      .then((res) => res.json())
      .then((json) => {
       setlists(json)
      });
  };

  const handledelete = (id)=>{
    const url1 = `http://127.0.0.1:8000/api/data/details/${user.user_id}/${id}`;
      fetch(url1, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      }).then((response) => {
        fetchdata();
      });
  }

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      fetchdata();
      isInitialMount.current = false
    } 
  });
  const  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 const [d, setd] = useState(new Date("2020-05-05"))
//  const m = months[d.getMonth()];
 const [m, setm] = useState();
 

 const setvalues =(list)=>{
  setd(()=>{new Date("2020-07-08")});
  setm(()=>{d.toLocaleString('default', { month: 'long' })});

 }

  return (
    <>
     <div className="container">
       
       
      {lists.length===0?<><h4 className="text-center" style={{marginTop:"50px"}}>Please Add Some Friends</h4>

   {/* <p>{monthName}</p> */}
       
      </>
      :
      lists.map((list)=>(
        <>
        <div className="data" key={list.id} >
          {()=>setvalues(list)}
              <img src={male} alt="error"/>
              <div className="details">
                <h4>{list.name}</h4>
                <p>DOB : {list.date} {m}</p>
                <Link style={{background:"#EDA7F1",color:"white"}} to={{pathname: "/form",state: list}} className="btn my-3">Edit</Link>
                <button style={{background:"#EDA7F1",color:"white"}} onClick={()=>{handledelete(list.id)}}  className="btn  mx-3">Delete</button>
            </div>
        </div>
        
        </>
            
    ))}
    <div className="text-center">
        <Link style={{color:"white"}} to="/form" className="btn btn-primary my-4">Add Friend</Link>   
        </div>

</div>
      {/* <div className="container my-5">
        
        <h3 style={{color:"black",fontFamily:"cursive"}} className="text-center">Birthday List</h3>
          <div className="data py-3 px-3" style={{backgroundColor:"white",width:"360px"}}>
             <Link to='/form' className="brn brn-primary">ADD Friend</Link>
            
             <button onClick={logout}>Logout</button>
           
             {lists.length==0?
             <div className="container">
                <h4>Please Add Some Friends</h4>
             </div>
             
             
             :lists.map((list) => (
               
             <div className="lists my-3 text-left">
                  <div className="image" style={{display:"flex"}}>
                      <img src={male} style={{height:"100px",width:"100px"}} alt="error"/>
                  
                      <div className="details px-3 py-0">
                          <p>Name : {list.name}</p>
                          <p>Birth Date : {list.date}</p>
                          
                          
                          <Link to={{pathname: "/form",state: list}} className="btn btn-primary">Edit</Link>
                          <button onClick={()=>{handledelete(list.id)}}  className="btn btn-primary mx-3">Delete</button>

                      </div>  
               </div>

              
              </div>
          ))
          
      }
                  
                 
      
  
       </div>
    </div> */}
    </>

  );
};

