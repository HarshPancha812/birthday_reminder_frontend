// import { Children } from "react/cjs/react.production.min";
import jwt_decode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


const Authcontext = createContext()

export default Authcontext;



export const Authprovider = ({children}) => {

    
    let [user, setuser] = useState(()=>localStorage.getItem('authtoken')?jwt_decode(localStorage.getItem('authtoken')):null);
    let [authToken, setauthToken] = useState(()=>localStorage.getItem('authtoken')?JSON.parse(localStorage.getItem('authtoken')):null);
    const [loading, setloading] = useState(null);
    
    const history = useHistory();
    let loginuser = async (e)=>{
        console.log("from")
        e.preventDefault();

         let url1 = `http://127.0.0.1:8000/api/user/token/`;
         let response = await fetch(url1, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: e.target.email.value,
                    password: e.target.password.value,
                }),
            })

            let data = await response.json()
            if(response.status===200){
                setauthToken(data)
                setuser(jwt_decode(data.access))
                localStorage.setItem('authtoken',JSON.stringify(data))
                history.push('/content');
            }
            else{
                if(response.status==401){
                   
                    alert("Invalid Login")
                    history.push('/login');
                }
            }
        }
        let logout = ()=>{
            setauthToken(null);
            setuser(null);
            localStorage.removeItem('authtoken');
            history.push('/login');
        }
        let updateToken= async()=>{
            let url1 = `http://127.0.0.1:8000/api/user/token/refresh/`;
            let response = await fetch(url1, {
                   method: "POST",
                   headers: {
                   "Content-Type": "application/json",
                   },
                   body: JSON.stringify({
                       'refresh':authToken.refresh
                   }),
               })
               
            let data = await response.json()
            if(response.status===200){
                console.log("Update Login")
                setauthToken(data)
                setuser(jwt_decode(data.access))
                localStorage.setItem('authtoken',JSON.stringify(data))
                
            }
            else{
                logout();
            }
        }

        useEffect(() => {
        let fourminutes = 1000 * 600 * 4
          let interval = setInterval(() => {
              if (authToken) {
                  updateToken();
              }
          }, fourminutes);
          return ()=>clearInterval(interval)
        }, [authToken],[loading]);
        
    let contextdata = {
        user:user,
        loginuser : loginuser,
        logout:logout
    }
   

  return (
      <Authcontext.Provider value={contextdata}>
          {children}
      </Authcontext.Provider>
  );
};
