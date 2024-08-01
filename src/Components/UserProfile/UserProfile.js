import React, { useState } from 'react';
import './userprofile.css';

const UserProfile = (user) => {
    // const user={
    //     firstName:"Sonali",
    //     LastName:"Kate",
    //     Age:25,
    //     isAdmin:true,
    //     Gender:"Female",
    // }

  return( 
    <div className='users-list'>
        <p> Name:{user.firstName} {user.lastName} </p>
        <p>Age:{user.age}</p>
      { user.isAdmin && <p>Gender:{user.gender}</p>}
        <p>{user.isAdmin ? <p>I Am Admin</p>:<p>I am Not Admin</p>}</p>
        <button className="btn-delete" onClick={
          (user.onDeleteUser)
        }>Delete</button>
    </div>
  )
}

export default UserProfile