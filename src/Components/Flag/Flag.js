import React, { useState } from 'react'




const Flag = () => {
    const [currentState,ChangeState] = useState("online");
    const [isOnline,setIsonline] = useState(false);

    const On =()=>{
        // ChangeState("Online");
        setIsonline(true);
    }
    const Off =()=>{
        // ChangeState("Offline");
        setIsonline(false);
    }
    const getButton = (handler,buttonName) =>{
        return <button onClick={handler}>{buttonName}</button>
    }
  return (
    <div>
        {/* <h1>I am Current state &nbsp;{currentState}</h1> */}
        {/* <h1>I am Current state &nbsp;{isOnline+''}</h1> */}
        <h1>I am Current state &nbsp;{isOnline?'Online':'Offline'}</h1>
        <br/><br></br>
        {/* <button style={{backgroundColor: "red",color:"white"}} onClick={On}>On</button>&nbsp;&nbsp;
       <button onClick={Off}>OFF</button> */}

       {getButton(On,"On")}&nbsp;&nbsp;
       {getButton(Off,"Off")}
    </div>
  )
}

export default Flag