import React from 'react';
import { Link } from 'react-router-dom';
import day from './day.jpg';

export const Home = () => {

  const style = {
    
  }
  return (<>
   
      <div className='container' style={{textAlign:"center",color:"black",justifyContent: "center",
   alignSelf:"center"}}>

        <h3 className='my-3' style={{textTransform:"none",lineHeight:"1.5"
        }}>Welcome to Birthday Reminder App</h3>
        <Link to="/register" className='btn btn-primary my-2' >Register Here</Link>
      </div>

   
    
    </>
  );
};
