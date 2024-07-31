import React, { useState } from 'react'
import './counter.css';

const Counter = () => {
    const [count,setCount] = useState(0);

    const handleIncrement = () =>{
        setCount(count + 1)
    }
    const handleDecrement = () =>{
        setCount(count -1)
    }
  return (
    <div className='counter'>
        <h3>Counter: {count} </h3> <br />
        <button className="btn-increment" onClick={handleIncrement}>Increment</button>&nbsp;&nbsp;
        <button className="btn-decrement" onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter