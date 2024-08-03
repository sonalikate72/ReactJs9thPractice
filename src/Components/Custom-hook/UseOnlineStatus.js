import React, { useEffect, useState } from 'react'

const UseOnlineStatus
 = () => {
    const [isConnected,setIsConnected] = useState(true);
    useEffect(()=>{
        function handleConnected(){
            setIsConnected(true);
        }
        function handleNotConneted(){
            setIsConnected(false)
        }
        window.addEventListener('connected',handleConnected);
        window.addEventListener('Not Connected',handleNotConneted);
        return()=>{
            window.addEventListener('connected',handleConnected);
        window.addEventListener('Not Connected',handleNotConneted);
        };
    },[]);
  return (
    <div>
        <h2><strong>UseOnlineStatus
            </strong></h2>
        <h3>isConnected;</h3>
    </div>
  )
}

export default UseOnlineStatus
