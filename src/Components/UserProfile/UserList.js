import React, { useState } from "react";
import UserProfile from "./UserProfile";
import './userlist.css';
import { Button } from "@mui/material";

const UserList = () => {
  const [users, setUsers] = useState([
    {
      id: "1",
      firstName: "Sonali",
      lastName: "Kate",
      age: 25,
      gender: "FeMale",
      isAdmin: true,
    },
    {
      id: "2",
      firstName: "Shlok",
      lastName: "Pandya",
      age: 22,
      gender: "Male",
      isAdmin: true,
    },
    {
      id: "3",
      firstName: "Priyanka",
      lastName: "Pandya",
      age: 30,
      gender: "Famale",
      isAdmin: true,
    },
    {
        id: "4",
        firstName: "Swara",
        lastName: "Sinha",
        age: 60,
        gender: "Famale",
        isAdmin: true,
      },
  ]);

  const [formValues,setFormValues] = useState({
    firstName:'',
    lastName:''
  })


  const onInputChange = (e) =>{
    console.log(e.target.value,e.target.name);
    formValues[e.target.name] = e.target.value;
    setFormValues({...formValues});
  }

  // const [firstName,setFirstName] = useState("");
  // const [lastName,setLastName] = useState("");


  // const onFirstNameChange = (e) =>{
  //   setFirstName(e.target.value);
  // }

  // const onLastNameChange = (e) =>{
  //   setLastName(e.target.value)
  // }


  const addUser = () =>{
    console.log(formValues.firstName,formValues.lastName);
    // users.push({
    //   id: users.length + 1,
    //   firstName: firstName,
    //   lastName: lastName,
    // })
    users.push({
      id: users.length + 1,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
    })
    setUsers([...users]);
    // setFirstName('');
    // setLastName('');
    setFormValues({
      firstName:'',
      lastName:''
    })
    
  }

  const onDeleteUser = (id) =>{
    // alert(id);
    const filteredusers = users.filter(user=>user.id!==id);
    setUsers([...filteredusers]);
  }
  
  return (
    <>
    <div>
        {/* <input placeholder="Enter First Name" value={firstName} onChange={onFirstNameChange}/>
        <input placeholder="Enter First Name" value={lastName} onChange={onLastNameChange}/><br/><br/> */}

<input name="firstName" placeholder="Enter First Name" value={formValues.firstName} onChange={onInputChange}/>
<input name="lastName" placeholder="Enter First Name" value={formValues.lastName} onChange={onInputChange}/><br/><br/>
        <Button className="myButton" variant="contained" onClick={addUser}>Add User</Button>
    </div>
    <div className="user-profile">
      {users.map(user => {
        return <div key={user.id}>
        <UserProfile
          firstName={user.firstName}
          lastName={user.lastName}
          age={user.age}
          gender={user.gender}
          isAdmin={user.isAdmin}
          onDeleteUser={()=>{
            onDeleteUser(user.id)
          }}
        />
        {/* <button className="btn-delete" onClick={()=>{
          onDeleteUser(user.id)
        }}>Delete</button> */}
        </div>
      })}
    
    </div>
    </>
  );
};

export default UserList;
