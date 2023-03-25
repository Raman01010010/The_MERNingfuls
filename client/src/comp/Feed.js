
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import React from 'react'
import {posts} from "../service/api"
import {getPosts} from "../service/api"
import Load from './Load';
import Post from './Post'
import Commnet from './Comment'
import { addLike } from '../service/api';
import { isLiked } from '../service/api';
import { searchPost } from '../service/api';

import ReactDOM from 'react-dom/client';
export default function Feed(props){
  console.log("Mmmm #yummy #donut at #CZ".match(/#\w+/g))
  console.log(props)
  var i=0;
  const d=new Date().toLocaleString()
  const [post,setPost]=React.useState({"time":d,"user":props.props.email,likes:[],comments:[]})
  console.log(props)
  const [quiz,setQuiz]=React.useState({})
  function handleChange(event){
    console.log(event.target.value)
   setQuiz(old=>{
    return(
      {
        ...old,
        [event.target.name]:event.target.value
      }
    )
   })
console.log(quiz)



  }
async function handlePost(){
  
  const p={...post,
  "hashtag":post.body.match(/#\w+/g)};
  console.log(p)
  await posts(p)
  getAllPost()
}
const [fpost,setFposts]=React.useState([])
React.useEffect(()=>{
  
getAllPost()
},[])

const getAllPost=async()=>{
  const root = ReactDOM.createRoot(
    document.getElementById('load')
  );
  
  root.render(
    <>
    <Load/>
    </>
  );
    let response=await getPosts();

    setFposts(response.data)
    const found = response.data.find(element => element._id==="640c9bfa9e9227d0fbe13f24");
    console.log(found)
    console.log(response.data)
    root.render(
      <>
     
      </>
    );
    console.log(fpost)
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
    let response=await getPosts();

    setFposts(response.data)


}

function load(){
  console.log("Loaded")
}
async function handleSearchPost(){
  const code= await searchPost(post)
  console.log(code)
 setFposts(code.response.data)
 
  
}
    return(<>
    <>
    <div  style={{background:"#669aed"}}>
    <FormControl>
      <h2>1. Little interest or pleasure in doing things</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
       
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="0" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="0" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="0" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="0" value="NEARLY EVERYDAY" control={<Radio />} label="MNEARLY EVERYDAY" />
      </RadioGroup>
    </FormControl><br/>
    <FormControl>
      <h2>2.2. Feeling down, depressed, or hopeless</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="1" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="1" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="1" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="1" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    </FormControl><br/>
    <FormControl>
      <h2>3. Trouble falling or staying asleep, or sleeping too much</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="2" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="2" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="2" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="2" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    </FormControl><br/>
    <FormControl>
      <h2>4. Feeling tired or having little energy</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="3" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="3" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="3" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="3" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    </FormControl><br/>
    <FormControl>
      <h2>5. Poor appetite or overeating</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="4" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="4" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="4" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="4" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    </FormControl><br/>
    <FormControl>
      <h2>6. Feeling bad about yourself - or that you are a failure or have let yourself or your family downs</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="5" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="5" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="5" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="5" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    </FormControl><br/>
    <FormControl>
      <h2>7. Trouble concentrating on things, such as reading the newspaper or watching television</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="6" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="6" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="6" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="6" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    </FormControl><br/>
    <FormControl>
      <h2>8. Moving or speaking so slowly that MORE THAN HALF DAYS people could have noticed
Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="7" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="7" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="7" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="7" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    </FormControl><br/>
    <FormControl>
      <h2>2.2. Feeling down, depressed, or hopeless</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="8" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="8" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="8" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="8" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    </FormControl><br/>
    <FormControl>
      <h2>2.2. Feeling down, depressed, or hopeless</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="9" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="9" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="9" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="9" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    </FormControl><br/>
    </div>

    
</>
</> )
}