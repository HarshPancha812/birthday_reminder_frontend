import React from 'react';
import { Link } from 'react-router-dom';

export const Content = () => {
  return (
  
  <div className='container'>
      <div className='content'>
      <h3 className='text-center'>Select One</h3>
      <Link to="/birthday_data">Show Friends</Link>
      <Link to="/form">Add Friend</Link>
      </div>
  </div>);
};
