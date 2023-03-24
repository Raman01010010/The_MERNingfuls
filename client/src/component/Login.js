import React from 'react'
import "../App.css";

export default function Login() {
  const [user,setUser]=React.useState({})
  function handleChange(event){
    setUser(old=>{
      return({
        ...old,
        [event.target.name]:event.target.value
      }
      )
    })
  

  }
  return (
      <div className='login-page'>
      <form>
  {/* Email input */}
  <div className=''></div>
  <div className="form-outline mb-4" >
    <input onChange={handleChange} type="email" id="form2Example1" className="form-control" placeholder='Email address' />
    <label className="form-label" htmlFor="form2Example1">
    </label>
  </div>
  {/* Password input */}
  <div className="form-outline mb-4">
    <input onChange={handleChange} on type="password" id="form2Example2" className="form-control" placeholder='Password'/>
    <label className="form-label" htmlFor="form2Example2">
    </label>
  </div>
  {/* 2 column grid layout for inline styling */}
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      
    </div>
    <div className="col">
      {/* Simple link */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>
  {/* Submit button */}
  <button type="button" className="btn btn-primary btn-block mb-4">
    Sign in
  </button>
  {/* Register buttons */}
  <div className="text-center">
    <p>
      Not a member? <a href="#!">Register</a>
    </p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f" />
    </button>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google" />
    </button>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter" />
    </button>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github" />
    </button>
  </div>
</form>
    </div>
  )
}
