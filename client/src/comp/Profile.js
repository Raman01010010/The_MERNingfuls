import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import React from 'react'
import {posts} from "../service/api"

import Load from './Load';
import Post from './Post'
import Commnet from './Comment'
import { addLike } from '../service/api';
import { isLiked } from '../service/api';
import { searchPost } from '../service/api';
import { getProfilePosts } from '../service/api';
import ReactDOM from 'react-dom/client';
export default function Profile(props){
  console.log("Mmmm #yummy #donut at #CZ".match(/#\w+/g))
  console.log(props)
  var i=0;
  const d=new Date().toLocaleString()
  const [post1,setPost1]=React.useState({"time":d,"user":props.props.email,likes:[],comments:[]})
  console.log(props)
  function handleChange(event){
    
console.log(d)
setPost1(old=>{
  return(
    {
      ...old,
      [event.target.id]:event.target.value
    }
  )
  
})
console.log(post1)

  }

const [fpost1,setFposts1]=React.useState([])
React.useEffect(()=>{
  
getProPost()
},[])

const getProPost=async()=>{
  const root = ReactDOM.createRoot(
    document.getElementById('load')
  );
  
  root.render(
    <>
    <Load/>
    </>
  );
    let response=await getProfilePosts({"user":props.user});
console.log(response)
    setFposts1(response.data)
    const found = response.data.find(element => element._id==="640c9bfa9e9227d0fbe13f24");
    console.log(found)
    console.log(response.data)
    root.render(
      <>
     
      </>
    );
    console.log(fpost1)
}
function handleComments(event){
  const root = ReactDOM.createRoot(
    document.getElementById('main')
  );
  
  root.render(
    <Commnet data={event} />
  );
 
} 
const [ls,setLs]=React.useState(true)
async function handleLike(event){
    await addLike({"id":event,"user":props.props.email})
    let response=await getProfilePosts({"user":props.user});
    console.log(response)
    setFposts1(response.data)


}

function load(){
  console.log("Loaded")
}
async function handleSearchPost(){
  const code= await searchPost(post1)
  console.log(code)
 setFposts1(code.response.data)
 
  
}
    return(
    <>
    <div id="load"></div>
    <div style={{flex:1,justifyContent: "center",alignItems: "center",background:"#ffffff",marginLeft:"40%",marginRight:"40%"}}>
  
      <div style={{width:"128px",marginLeft:"12%"}}>           <img   src={props.props.picture==="gfgh"||props.props.picture==="https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"?"user.png":props.props.picture}></img>
      </div>
   </div>
            Profile
            Name : {props.props.name}
         
         <div className="row">

 
      
      
     
    </div>
  </>
    )
}
