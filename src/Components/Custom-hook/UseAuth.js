import React, { useEffect, useState } from 'react'

const UseAuth = () => {
    const [isAuthenticated,setIsAuthenticated] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            setIsAuthenticated(true);
        }else{
            setIsAuthenticated(false);
        }
    },[]);
  return (
    <div>
        isAuthenticated
    </div>
  )
}

export default UseAuth