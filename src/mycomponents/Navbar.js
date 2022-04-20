import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Authcontext from '../context/Authcontext';


export const Navbar = () => {
    const {user} = useContext(Authcontext);
    const {logout} = useContext(Authcontext);

  return (
  
<div>
      <nav className="navbar navbar-expand-lg  navbar-light bg-light" style={{}}>
        <Link className="navbar-brand" to="/">
          Birthday Reminder
        </Link> 
        
        

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
     </button>
        
        <div className="collapse navbar-collapse" style={{justifyContent:'flex-end'}} id="navbarSupportedContent">
          <ul className="navbar-nav  mr-auto">

          {user?<>
        <Link className="navbar-brand" to="/birthday_data">
         Friends
        </Link>
        <Link className="navbar-brand" to="/form">
        Add Friend
       </Link>
       <button className='btn ' onClick={logout}>Logout</button>
       </>:<Link className="navbar-brand mx-3" to="/register">
          Register / Login
         </Link>}
   
          <li>
          
            </li>
          </ul>
        </div>
      </nav>
    </div>

//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//     <div class="container-fluid" style={{justifyContent:"space-between"}}>
//       <a class="navbar-brand" href="#">Birthday Reminder</a>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//           <li class="nav-item">
//             <a class="nav-link active" aria-current="page" href="#">Home</a>
//           </li>
          
//         </ul> */}
//         <ul class="navbar-nav">
//           <li class="nav-item">
          
//             <Link to="/register" class="btn btn-outline-success mx-3">Register</Link>
            
//           </li>
//           <li><Link to="/register" class="btn btn-outline-success ">Login</Link></li>
          
//         </ul>
           

            
        
//       </div>
//     </div>
//   </nav> 
 );
};
