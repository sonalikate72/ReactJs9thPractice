import React from 'react'
import { users } from './user'
import './user.css';
import { useNavigate } from 'react-router-dom';


function UserList ({usersList,onUserDelete,onUserUpdate}) {
  const navigate = useNavigate()
  return <>
  <button className='btn btn-add' onClick={()=>{navigate("/usercrud/form")}}>Add New</button><br /><br />
  <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile No</td>
            <td>Address</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {usersList.map(user => {
            return <tr key={user.id}>
                <td>{user.firstname}</td>
                <td>{user.email}</td>
                <td>{user.mobileNo}</td>
                <td>{user.address}</td>
                <td>
                  <button type="button" className="btn-update" onClick={() => onUserUpdate(user)}>
                    Update
                  </button>
                  &nbsp;&nbsp;
                  <button type="button" className="btn-delete" onClick={()=>{onUserDelete(user.id)}}>
                    Delete
                  </button>
                </td>
              </tr>
          })}
        </tbody>
      </table>
  </>
  
}

export default UserList