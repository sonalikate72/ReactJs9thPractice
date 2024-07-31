import React from 'react'

const UserProfile = () => {
    const user={
        firstName:"Sonali",
        LastName:"Kate",
        Age:2,
        isAdult:true,
        Gender:"Female",
        Address:"Islampur"
    }
  return (
    <div>
        <h1>UserProfile</h1>
        <p> Name:{user.firstName} {user.LastName} </p>
        <p>Age:{user.Age}</p>
      { user.isAdult && <p>Gender:{user.Gender}</p>}
        <p>IsAdult:{user.isAdult ? <p>I Am Admin</p>:<p>I am Not Admin</p>}</p>
    </div>
  )
}

export default UserProfile