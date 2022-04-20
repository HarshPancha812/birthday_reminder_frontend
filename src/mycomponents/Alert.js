import React, { useContext } from 'react'
import Authcontext from '../context/Authcontext'

export const Alert = () => {
    const {alert} = useContext(Authcontext);


   return(


    
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Invalid Login!</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
   )

}
