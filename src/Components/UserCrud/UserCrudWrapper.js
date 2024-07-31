import React, { useState } from "react";
import "./user.css";
import "./user.js";
import { userList, users } from "./user.js";
import { Formik, Form, Field } from "formik";
import UserForm from "./UserForm.jsx";
import UserList from "./UserList.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";

function UserCrudWrapper() {
  const navigate = useNavigate();
  const [usersList, setUserList] = useState(users);
  const [update,setUpdate] = useState('');
  const [userToBeUpdated,setUserToBeUpdated] = useState('');

  const onDelete = (id) => {
    const usersval = usersList.filter((user) => user.id !== id);
    setUserList([...usersval]);
  };



  return (
    <div className="user-crud-wrapper">
      <Routes>
        <Route path="/" element={<div>User Crud Warpperr</div>}></Route>
        <Route path="/list" element={<UserList
        usersList={usersList} onUserUpdate={(users)=>{
          console.log("Updateing user is:", users);
          setUserToBeUpdated({...users});
          navigate("/usercrud/form")
        }}
        onUserDelete={(id) => {
          alert("Do you want to delete?");
         onDelete(id);
        }}
      />}></Route>
        <Route path="/form" element={   <UserForm userToBeUpdated={userToBeUpdated}
          onUserFormSubmit={(users,id) => {
            console.log("User Created", users);

            if(id){
              const fUSer = usersList.find(userItem =>userItem.id === id);
              fUSer.firstname = users.firstname
              fUSer.email = users.email
              fUSer.mobileNo = users.mobileNo
              fUSer.address = users.address
          setUserToBeUpdated(null);

            }else{
              users.id = usersList.length + 1;
              usersList.push(users)
            }
          
            setUserList([...usersList]);
            //Navigate
            navigate("/usercrud/list");
          }}
        ></UserForm>}></Route>

      </Routes>
      <div className="user-form">
     
      </div>
      
    </div>
  );
}

export default UserCrudWrapper;
