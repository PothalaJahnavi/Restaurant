import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import './login.css'
import { Link,useNavigate } from 'react-router-dom';
const Login = ({setFlag}) => {
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    function handleClick(e){
     e.preventDefault();
     axios.post("http://localhost:5000/login",{
       email:email,
       password:password
     }).then((res)=>{
      if((res.data))
      {
        setFlag(true);
        navigate("/products")
      }
      else{
     alert("verify")
      }
     })
    }
  return (
        <div className='login'>
    <div className="form-container">
          <h1 style={{textAlign:"center",color:"white"}}>LOGIN</h1>
          <form className="login-form" onSubmit={handleClick}>
          <input
          class="form-field"
          label="E mail" 
          variant="outlined"
           autoComplete='off'
           placeholder='email'
            value={email} 
            onChange={(e)=>{setEmail(e.target.value)}}
            name="email"
            required
            />
          <input 
          class="form-field"
          id="outlined-basic" 
          label="Password" 
          placeholder="password"
          type="password"
          variant="outlined"
           autoComplete='off'
            value={password} 
            onChange={(e)=>{setPassword(e.target.value)}}
            name="password"
            required
            />
          <button class="form-field" type="submit">
          Login
        </button>
        <p style={{fontSize:"20px",fontWeight:"600",color:"white"}}>If you don't have an account?&nbsp;&nbsp;<Link to="/register" style={{color:"blue",fontSize:"20px",fontWeight:"600",}}>Register</Link></p>
          </form>
        </div>
        </div>
      )
    }
export default Login


