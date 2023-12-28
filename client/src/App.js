import logo from './logo.svg';
import './App.css';
import { addUser } from './services/api'
import ReactDOM from 'react-dom/client';
import './component/Navbar.js';
import Navbar from './component/Navbar.js';
import Login from './component/Login'
import Signup from './component/Signup'
import Otp from './component/Otp'
import Main from './component/Main';
async function handleSignUp(user){
  
  console.log("submit")
 const user1={
    ...user,
    "picture":"NA",
    "name":`${user.given_name} ${user.family_name}`
  }
  const code=await addUser(user1)
  console.log(code)
  if(code.data===2){
    const root = ReactDOM.createRoot(
      document.getElementById('main')
    );
    
    root.render(
      <Otp/>
      
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
function handleOtp(){
  console.log("otp")
}
function App() {
  return (
    <div className="App">
      <Main handleOtp={handleOtp} handleSu={handleSignUp}/>
    </div>
  );
}

export default App;
