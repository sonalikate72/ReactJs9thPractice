import { Formik } from "formik";
import React from "react";
import "./style.css";

const CreateUser = () => {
  return (
    <div>
      <Formik>
        <form>
            <label htmlFor="">Email</label>
          <input type="email" name="email" />
          <label htmlFor="">Password</label>
          <input type="password" name="password" />
          <button type="submit">Submit</button>
        </form>
      </Formik>
    </div>
  );
};

export default CreateUser;
