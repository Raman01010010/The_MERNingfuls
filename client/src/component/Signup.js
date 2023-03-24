import React from 'react'
import "../App.css"
import { addUser } from '../services/api'
export default function Signup() {
  const [user,setUser]=React.useState({})
  function handleChange(event){
    console.log("changed")
    setUser(old=>{
      return(
        {
          ...old,
          [event.target.name]:event.target.value
        }
      )
    })
    console.log(user)
   

  }
  async function handleSubmit(event){
    event.preventDefault()
    console.log("submit")
   const user1={
      ...user,
      "picture":"NA",
      "name":`${user.given_name} ${user.family_name}`
    }
    await addUser(user1)
  }
  return (
    <div> 
        <div className='navbar-body'>
      <form  style={{ border: "1px solid #ccc" }}>
  <div className="container">
    <h1 className='content'>Sign Up</h1>
    <p className='content'>Please fill in this form to create an account.</p>
    <hr />
    <label htmlFor="given_name">
      <b className='content'>First Name</b>
    </label>
    <input onChange={handleChange} type="text" placeholder="Enter First Name" name="given_name" required="" />
    <label htmlFor="family_name">
      <b className='content'>Last Name</b>
    </label>
    <input onChange={handleChange} type="text" placeholder="Enter Last Name" name="family_name" required="" />
    <label htmlFor="email">
      <b className='content'>Email</b>
    </label>
    <input onChange={handleChange} type="text" placeholder="Enter Email" name="email" required="" />
    <label htmlFor="psw">
      <b className='content'>Password</b>
    </label>
    <input onChange={handleChange}
      type="password"
      placeholder="Enter Password"
      name="token"
      required=""
    />
    
  
    <p className='content'>
      By creating an account you agree to our{" "}
      <a href="#" style={{ color: "blue" }}>
        Terms &amp; Privacy
      </a>
      .
    </p>
    <div className="clearfix">
      <button type="submit" onClick={handleSubmit} className="signupbtn">
        Sign Up
      </button>
    </div>
  </div>
</form>
</div>
    </div>
  )
}
