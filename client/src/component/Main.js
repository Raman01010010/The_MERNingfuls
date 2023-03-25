

import { addUser } from '../services/api'
import ReactDOM from 'react-dom/client';
import './Navbar.js';
import Navbar from './Navbar.js';
import Login from './Login'
import Signup from './Signup'
import Otp from './Otp'
export default function Main(props){
    console.log(props)
    async function handleSignUp(user){
  
        console.log("submit")
       const user1={
          ...user,
          "picture":"NA",
          "name":`${user.given_name} ${user.family_name}`
        }
        const code=await addUser(user1)
        console.log(code)
        if(code.response.data===2){
          const root = ReactDOM.createRoot(
            document.getElementById('main')
          );
          
          root.render(
            <Otp handleOtp={props.handleOtp}/>
            
          );
        }else{
          const root = ReactDOM.createRoot(
            document.getElementById('mess')
          );
          
          root.render(
            <>
            {code.response.data}</>
          );
        }
        
      }
    return(
        <>
        <Navbar/>
        <div id="main"><Signup handleSu={props.handleSu}/></div>
        </>
    )
}