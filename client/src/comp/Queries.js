
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
export default function Queries(props){

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





const [ls,setLs]=React.useState(true)

function load(){
  console.log("Loaded")
}

    return(<>
    <>
    <div  style={{background:"#669aed"}}>
  
      <div style={{fontSize:"40px",marginLeft:"0px"}}>1. Little interest or pleasure in doing things</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
       
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="0" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="0" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="0" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="0" value="NEARLY EVERYDAY" control={<Radio />} label="MNEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}}>2. Feeling down, depressed, or hopeless</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="1" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="1" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="1" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="1" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
  <br/>
    
      <div style={{fontSize:"40px"}}>3. Trouble falling or staying asleep, or sleeping too much</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="2" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="2" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="2" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="2" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}}>4. Feeling tired or having little energy</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="3" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="3" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="3" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="3" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}}>5. Poor appetite or overeating</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="4" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="4" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="4" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="4" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}} >6. Feeling bad about yourself - or that you are a failure or have let yourself or your family downs</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="5" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="5" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="5" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="5" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}} >7. Trouble concentrating on things, such as reading the newspaper or watching television</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="6" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="6" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="6" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="6" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}} >8. Moving or speaking so slowly that MORE THAN HALF DAYS people could have noticed
Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="7" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="7" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="7" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="7" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}} >9. Feeling down, depressed, or hopeless</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="8" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="8" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="8" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="8" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}} >10. If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="9" value="NOT DIFFICULT AT ALL" control={<Radio />} label="NOT DIFFICULT AT ALL" />
        <FormControlLabel onChange={handleChange} name="9" value="SOMEWHAT DIFFICULT" control={<Radio />} label="SOMEWHAT DIFFICULT" />
        <FormControlLabel onChange={handleChange} name="9" value="VERY DIFFICULT" control={<Radio />} label="VERY DIFFICULT" />
        <FormControlLabel onChange={handleChange} name="9" value="EXTREMELY DIFFICULT" control={<Radio />} label="EXTREMELY DIFFICULT" />
      </RadioGroup>
    <br/>
    </div>

    
</>
</> )
}