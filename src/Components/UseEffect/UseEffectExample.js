import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

const UseEffectExample = ({name}) => {
    const [counter,setCounter] = useState(0);

    useEffect(()=>{
        console.log("This is Executed Everytime Render in Componenet..",counter);
    },[]);

    useEffect(()=>{
        console.log("This is Executed Updated Componenet..",counter);
        return()=>{
            console.log('I am Claening Up',counter);
        }
    },[]);


    useEffect(()=>{
        console.log('With Dependancy array in useeffect');
    },[counter]);


    useEffect(()=>{
        console.log("With executed prop changed..");
    },[name])

  return (
    <div>
       <h3>UseEffect Example {name}</h3> <br/>
        {counter}<br/><br/>
        <Button variant="contained" onClick={() => setCounter(counter+1)}>Increment</Button>&nbsp;&nbsp;
        <Button variant="contained" onClick={() => setCounter(counter-1)}>Decrement</Button>&nbsp;&nbsp;

    </div>
  )
}

export default UseEffectExample