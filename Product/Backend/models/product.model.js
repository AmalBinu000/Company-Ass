
import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    prodName : {type:String,required:true},
    prodDes : {type:String,required:true},
    prodPrice : {type:String,required:true},
    prodrating : {type:String,required:true},
    prodCategory : {type:String,required:true},
})

let products = mongoose.model("products",productSchema)

export default products;