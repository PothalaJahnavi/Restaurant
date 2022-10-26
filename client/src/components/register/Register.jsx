import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import './register.css'
import { Link } from 'react-router-dom';
const Register = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password:"",
        confirm:""
      });
      const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
      const handleInputChange = (event) => {
        /* event.persist(); NO LONGER USED IN v.17*/
        event.preventDefault();
    
        const { name, value } = event.target;
        setValues((values) => ({
          ...values,
          [name]: value
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (values.firstName && values.lastName && values.email && values.password && values.confirm) {
          setValid(true);
          if(values.password===values.confirm)
          {
            axios.post("http://localhost:5000/register",{
                firstName:values.firstName,
                LastName:values.lastName,
                email:values.email,
                password:values.password,
             }).then((res)=>{
                console.log(res.data)
                setSubmitted(true);
            })
          }
          else{
            alert("password and confirm password should match")
          }
         
        }
      };
    
  return (
    <div className="register">
    <div className="form-container">
    <form className="register-form" onSubmit={handleSubmit}>
      <h1  style={{textAlign:"center",color:"black"}}>Register</h1>
      {submitted && valid && (
        <div className="success-message">
          <h3>
            {" "}
            Welcome {values.firstName} {values.lastName}{" "}
          </h3>
          <div>Your registration was successfull! Now You can 
           <Link to="/login"> Login </Link> 
             </div>
        </div>
      )}
      {!valid && (
        <input
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleInputChange}
          autoComplete="off"
        />
      )}

      {submitted && !values.firstName && (
        <span id="first-name-error">Please enter a first name</span>
      )}

      {!valid && (
        <input
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleInputChange}
          autoComplete="off"

        />
      )}

      {submitted && !values.lastName && (
        <span id="last-name-error">Please enter a last name</span>
      )}

      {!valid && (
        <input
          class="form-field"
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          autoComplete="off"

        />
      )}

      {submitted && !values.email && (
        <span id="email-error">Please enter an email address</span>
      )}

     {!valid && (
        <input
          class="form-field"
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
          autoComplete="off"

        />
      )}

      {submitted && !values.lastName && (
        <span id="last-name-error">Please enter password</span>
      )}
       
       {!valid && (
        <input
          class="form-field"
          type="text"
          placeholder="Confirm Password"
          name="confirm"
          value={values.confirm}
          onChange={handleInputChange}
          autoComplete="off"

        />
      )}

      {submitted && !values.lastName && (
        <span id="last-name-error">enter confirm password</span>
      )}

      {!valid && (
        <button class="form-field" type="submit">
          Register
        </button>
      )}
    </form>
    <p style={{fontSize:"20px",fontWeight:"600",color:"white"}}>If you have an account?&nbsp;&nbsp;<Link to="/login">Login</Link></p>
  </div>
  </div>
  )
}

export default Register


 

  


  