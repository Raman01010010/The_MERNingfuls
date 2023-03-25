import axios from "axios"
const URL="http://localhost:8000"

//const URL="https://a1-w3yj.onrender.com"
export const addUser=async (data)=>{
    try{
        return await axios.post(`${URL}/register`,data)

    }catch(error){
        console.log("Error add",error.response.data)
        return error
    }
}
export const addUser2=async (data)=>{
    try{
        return await axios.post(`${URL}/cOtp`,data)

    }catch(error){
        console.log("Error add",error.response.data)
        return error
    }
}