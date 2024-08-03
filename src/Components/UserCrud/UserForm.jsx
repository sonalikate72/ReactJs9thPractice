import React from 'react'
import { Formik, Form, Field } from "formik";

function UserForm ({user,onUserFormSubmit,userToBeUpdated}) {
  return <div>
        <Formik
        enableReinitialize={true}
          initialValues={{
            firstname: userToBeUpdated?.firstname || '',
            email: userToBeUpdated?.email || '',
            mobileNo: userToBeUpdated?.mobileNo || '',
            address: userToBeUpdated?.address || ''
          }}
          onSubmit={(values,{resetForm}) => {
            console.log("Submitted values", values)
            onUserFormSubmit(values, userToBeUpdated?.id)
            resetForm();
        }}
        >
          <Form className="user-form">
            <Field type="text" id="firstname" name="firstname" placeholder="Enter FirstName" className="user-inputs"/><br /><br />
            <Field type="email" id="email"   name="email" placeholder="Enter Email"  className="user-inputs"/><br /><br />
            <Field  type="number" id="mobileno" name="mobileNo" placeholder="Enter Mobile No." className="user-inputs"/><br /><br />
            <Field  type="text" id="address" name="address" placeholder="Enter Address" className="user-inputs"/><br /><br />

         
            <button type="submit">Submit</button>
          </Form>
        </Formik>
    </div>
  
}

export default UserForm