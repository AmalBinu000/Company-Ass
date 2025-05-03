import mongoose from "mongoose";

const Data = new mongoose.Schema({
    title : {type:String , required:true},
    content:String
},{
    timestamps:true
});

const UserData = mongoose.model("UserData",Data);

export default UserData;
