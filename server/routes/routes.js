const express = require('express');
const router = express.Router()
const users = require('../models/userSchema')
const { passwordStrength } = require('check-password-strength')
var validator = require("email-validator");
const otp=require('../models/otpSchema')
const sendEmail=require('../utils/sendEmail')
const bcrypt=require('bcryptjs')
router.post('/register', async (req, res) => {
    console.log(req.body);
      const { name, email,given_name,picture,token,family_name } = req.body

    var m=1;
   
    console.log(name)
    if(validator.validate(email)){
        if(passwordStrength(token).value==='Strong'||passwordStrength(token).value==='Medium'){
    try {

        const preuser = await users.findOne({ email: email })
        console.log(preuser)
        console.log("otp creation section")
        if(preuser){
            res.status(404).send("This user already exists")
            console.log("This user already exist")
        }
        else{
            const adduser=new users({
                name, email,given_name,picture,token,family_name

            })



console.log("otp creation section")




            const d=new Date()
  // const {email}=req.body
   otp5=Math.floor(100000 + Math.random() * 900000)
    const otp1=new otp({
        otp:otp5,email:email,time:d
    
       })
      
   const otp2=await otp.find({email:email})
   console.log(otp2)
   if(otp2.length){
    
    const upd=await otp.updateOne({email:email},{$set:{otp:otp5,time:d}});

    await sendEmail("",otp5,email,"",email)

    res.status(200).send("2")
    console.log("updated")
   }else{
    try {
        
      
           const k1= await otp1.save();
           const k2= await sendEmail("",otp5,email,"",email)
            console.log("success")
            res.status(200).send("2")

        }catch(error){
            console.log(error)
            res.status(404).send("Error otp creation")
        }
    }






           // await adduser.save();
           // res.status(201).json(adduser)
            console.log(adduser)

        }
    } catch (error) {
        //res.status(404).send(error)
        console.log(error)
    }}else{
        res.status(404).send("Weak Password")
    }

}else{
        res.status(404).send("Email Not valid")
    }


})




router.post("/checkOtp",async(req,res)=>{
    var {otp5, name, email,given_name,picture,token,family_name } =req.body
    /*
    const adduser=new users({
        name, email,given_name,picture,token,family_name

    })
    */

    const salt=await bcrypt.genSalt(10)
    const secPas=await bcrypt.hash(token,salt)
token=secPas
    const adduser=new users({
        name, email,given_name,picture,token,family_name
    
    })
    try{
    const otp3=await otp.find({otp:otp5,email:email})

   
    if(otp3.length>0){
    const interval=((new Date())-otp3[0].time)/60000
    console.log(interval)
    if(interval>10){
        console.log("Otp expired")
        res.status(200).send("otp expired")
    }
    else{
        console.log("otp accepted")
        
        await adduser.save();


        




        res.status(200).send("2")

    }}
    else{
        console.log("wrong otp")
        res.status(404).send("wrong otp")
    }

    console.log(otp3)}
    catch(error){
        console.log(error)
    }

})






router.post('/hello', async (req, res) => {
   
    
    try{
      
        console.log("Ramban")

    }catch(error){
        //error.status(404).json({message:error.message})
        console.log("error")
          
    }

})

module.exports = router;