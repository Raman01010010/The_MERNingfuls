
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    token:{
        type:String,
        required:true
    },
    given_name:{
        type:String,
        required:true
    },
    family_name:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    picture:{
        type:String,
        required:true
    }
});
const user1=new mongoose.model("user1",userSchema);
module.exports=user1
