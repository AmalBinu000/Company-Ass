import mongoose from "mongoose";

let register = mongoose.Schema({
    userName : {type:String , required:true},
    email: {type:String , required:true ,unique:true},
    password : {type:String , required:true,minlength:8},
})

let regUser = mongoose.model("regUser",register);

export default regUser;