
import './otp.css'
import * as React from 'react';
export default function Otp(props) {
  console.log(props)
  const [otp,setOtp]=React.useState({})
    function handleChange(event){
        setOtp(old=>{
            return(
                {
                    ...old,
                    [event.target.id]:event.target.value,
    
                }
            )
        })
        console.log(otp)

    }
    return(

        <>
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
      <div style={{color:"#ffffff"}}id="mess"></div>
      <div style={{border:"solid 2px #ffffff",color:"#ffffff"}} onClick={()=>props.handleOtp(props.user)} className="signupbtn">
        Sign Up
      </div>

    </div>
  </div>
</form>
</div>
    </div>

        </>
    )
}