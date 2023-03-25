
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import React from 'react'
import { addResponse } from '../service/api';

import ReactDOM from 'react-dom/client';
export default function Queries(props){

  const [quiz,setQuiz]=React.useState({"a":"","b":"","c":"","d":"","e":"","f":"","g":"","h":"","i":"","j":""})
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


async function handleClick(){
    await addResponse(quiz)

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
        <FormControlLabel onChange={handleChange} name="a" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="a" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="a" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="a" value="NEARLY EVERYDAY" control={<Radio />} label="MNEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}}>2. Feeling down, depressed, or hopeless</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="b" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="b" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="b" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="b" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
  <br/>
    
      <div style={{fontSize:"40px"}}>3. Trouble falling or staying asleep, or sleeping too much</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="c" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="c" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="c" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="c" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}}>4. Feeling tired or having little energy</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="d" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="d" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="d" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="d" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}}>5. Poor appetite or overeating</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="e" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="e" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="e" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="e" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}} >6. Feeling bad about yourself - or that you are a failure or have let yourself or your family downs</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="f" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="f" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="f" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="f" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}} >7. Trouble concentrating on things, such as reading the newspaper or watching television</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="g" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="g" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="g" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="g" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}} >8. Moving or speaking so slowly that MORE THAN HALF DAYS people could have noticed
Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="h" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="h" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="h" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="h" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    <br/>
    
      <div style={{fontSize:"40px"}} >9. Feeling down, depressed, or hopeless</div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="i" value="NOT AT ALL" control={<Radio />} label="NOT AT ALL" />
        <FormControlLabel onChange={handleChange} name="i" value="SEVERAL DAYS" control={<Radio />} label="SEVERAL DAYS" />
        <FormControlLabel onChange={handleChange} name="i" value="MORE THAN HALF DAYS" control={<Radio />} label="MORE THAN HALF DAYS" />
        <FormControlLabel onChange={handleChange} name="i" value="NEARLY EVERYDAY" control={<Radio />} label="NEARLY EVERYDAY" />
      </RadioGroup>
    </FormControl><br/>
    <FormControl>
      <h2>1a. If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?</h2>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        
        name="radio-buttons-group"
      >
        <FormControlLabel onChange={handleChange} name="j" value="NOT DIFFICULT AT ALL" control={<Radio />} label="NOT DIFFICULT AT ALL" />
        <FormControlLabel onChange={handleChange} name="j" value="SOMEWHAT DIFFICULT" control={<Radio />} label="SOMEWHAT DIFFICULT" />
        <FormControlLabel onChange={handleChange} name="j" value="VERY DIFFICULT" control={<Radio />} label="VERY DIFFICULT" />
        <FormControlLabel onChange={handleChange} name="j" value="EXTREMELY DIFFICULT" control={<Radio />} label="EXTREMELY DIFFICULT" />
      </RadioGroup>
    </FormControl><br/>
    <div onClick={handleClick}>Submit</div>
    </div>

    
</>
</> )
}