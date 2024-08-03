import React from 'react'

const Greeting = (props) => {
    const age = 24;
  return (
    <div><h1>Greeting Componenet</h1>
    <p><strong>{`${props.greeting} ${props.name}`}</strong></p>
    <p>Age is: {age}</p>
    </div>
  )
}

export default Greeting