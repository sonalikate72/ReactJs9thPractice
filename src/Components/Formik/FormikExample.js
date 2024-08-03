import { Field, Form, Formik } from 'formik'
import React from 'react';
import './formik.css';


const FormikExample = () => {
  return (
    <div>
        <Formik 
        initialValues={{
            firstName:'',
            lastName:'',
            email:''
        }}
        onSubmit={(values)=>{
            console.log("Submitted Values",values);
        }}
        >
            <div className='formik-form'>
                <h3>Formik Example</h3>
            <Form>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="First Name"  style={{ width: "200px" }}/><br/><br/>
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Last Name" style={{ width: "200px" }}/><br/><br/>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="Enter email"style={{ width: "200px"}} /><br/><br/>
            <label htmlFor="radio">Male
            <Field id="radio" name="gender" type="radio" value="male" />
            </label>
            <label htmlFor="radio">FeMale
            <Field id="radio" name="gender" type="radio" value="female" />
            </label>
            <br/><br/>Select Color:&nbsp;
            <Field name="color" as="select" className="Select-Input">
            <option value="" >Select Color</option>
                <option value="yellow">Yellow</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>

            </Field>  <br/><br/>
            <button type='submit' className='btn-formik'>Submit</button>
            </Form>
            </div>

        </Formik>
    </div>
  )
}

export default FormikExample