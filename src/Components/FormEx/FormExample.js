import { IconButton } from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./FormExample.css";

const FormExample = () => {
  const [selectFile, setSelectFile] = useState();
  const [formInput, setFormInput] = useState({
    textInput: "",
    numberInput: "",
    passwordInput: "",
    TextAreaInput: "",
    checkBoxInput: true,
    selectBoxInput:'',
    radioButtonInput: "",
    selectedFile: "",
  });

  const onInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    formInput[name] = type == "checkbox" ? checked : value;
    console.log(formInput);
    setFormInput({ ...formInput });
  };

  const handleFileChange = (e) => {
    setSelectFile(e.target.files[0]);
  };
  return (
    <>
      <h2>Form Example</h2>
      <div className="form-container">
      <div className="form-group ">
        <label>Name:</label>
        <input
          name="textInput"
          type="text"
          placeholder="Name"
          value={formInput.textInput}
          onChange={onInputChange}
          className="input-form"
        />
      </div>
      <div className="form-group">
        <label>Mobile:</label>
        <input
          name="numberInput"
          type="number"
          placeholder="Mobile"
          value={formInput.numberInput}
          onChange={onInputChange}
             className="input-form"
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          name="passwordInput"
          type="password"
          placeholder="Password"
          value={formInput.passwordInput}
          onChange={onInputChange}
             className="input-form"
        />
        {/* <IconButton
              size="small"
              aria-label="toggle password visibility"
            >
              {formInput.showPassword ? (
                <VisibilityIcon fontSize="small" />
              ) : (
                <VisibilityOffIcon fontSize="small" />
              )}
            </IconButton> */}
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="textAreaInput"
          cols={30}
          rows={4}
          type={Text}
          placeholder="Description"
        ></textarea>
      </div>
      <div className="form-group">
        <label>
          Select Lang:   </label>&nbsp;
          <select
            value={formInput.selectBoxInput}
            name="selectBoxInput"
            onChange={onInputChange}
          >
            <option value="" disabled>
              Select Languages
            </option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="react">React Js</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
          </select>
      
      </div>
      <div className="form-group">
        <label>
          Checkbox:
          <input
            name="checkBoxInput"
            type="checkbox"
            checked={formInput.checkBoxInput}
            onChange={onInputChange}
            style={{ width: "20px" }}
               className="checkbox"
          />{" "}
          I Agree
        </label>
      </div>
      <div className="form-group">
        <label>
          Radio:
          <input
            name="radioButtonInput"
            type="radio"
            value="male"
            checked={formInput.radioButtonInput == "Male"}
            onChange={onInputChange}
            style={{ width: "20px" }}
               className="radiobutton"
          />
          Male
          <input
            name="radioButtonInput"
            type="radio"
            value="female"
            checked={formInput.radioButtonInput == "female"}
            onChange={onInputChange}
            style={{ width: "20px" }}
               className="radiobutton"
          />
          Female
        </label>
      </div>
      <div className="form-group">
        <label>
          Select File:
          <input type="file" onChange={handleFileChange}    className="input-form"/>
          {/* <p>Selected File: {selectFile?.name}</p> */}
        </label>
      </div>
      {/* <input type="submit" value="submit"/> */}
    </div>
    </>
  );
};

export default FormExample;
