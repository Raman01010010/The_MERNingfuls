import jwt_decode from 'jwt-decode'
import Load from './Load'
import React, { useCallback } from "react"
import {LoginSocialFacebook} from 'reactjs-social-login'
import {FacebookLoginButton} from 'react-social-login-buttons'

export default function SideBar1(props){
   console.log(props.log)
return(
  
<div style={{backgroundColor:"#e8b7e8"}}>
<div class="col-12 grid-margin">
                <div class="card" style={{borderRadius:"50px"}}>
                  <div class="card-body">
                    <h4 class="card-title">Join Now</h4>
                    <div class="table-responsive">
                      <div class="blockquote blockquote-primary"style={{border:"10px solid #c9742e",borderRadius:"50px"}}>
                      <h1 class="display-1">Create your account and join Us now</h1>
                      <div id="hide">
              <button id="sign1" className="inline-flex text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded">Sign In</button></div>
              <button>
{Object.keys(props.Img).length===0 &&<LoginSocialFacebook
     appId="1832325630476306"
     onResolve={props.fbb}
     onReject={(error)=>{
      console.log(error);
     }}
     >
      <FacebookLoginButton/>

    
      </LoginSocialFacebook>}</button></div>
                    </div>
                  </div>
                </div>
              </div>
             
             <div className='row'>
<div class="col-md-6 grid-margin stretch-card">

                <div class="card" style={{borderRadius:"50px"}}>
                  <div class="card-body">
                   
                    <div class="template-demo">
                      <div  class="blockquote blockquote-primary" style={{border:"10px solid #c9742e",borderRadius:"50px"}}>
                      <h1 class="display-1">Welcome to Nervo Care</h1>
                      </div>
                    
                    
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-md-6 grid-margin stretch-card">
                <div class="card" style={{borderRadius:"50px"}}>
                  <div class="card-body" >
                   
                    <div class="template-demo">
                      <div  class="blockquote blockquote-primary" style={{border:"10px solid #c9742e",borderRadius:"50px"}}>
                      <h1 class="display-1">Mental Health is more important that physical health</h1>
                      </div>
                    
                    
                    </div>
                  </div>
                </div>
              </div> </div>
          


             


            
            
</div>
)
}