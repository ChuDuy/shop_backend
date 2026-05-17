
import mongoose from "mongoose";   
const productSchema = new mongoose.Schema({
    name : {
        type : String, 
        require : true,
    },
    price :{
        type : Number,
        require : true,

    } ,
    description :{
        type : String,
    },
    stock : {
        type: Number,
        default : 0,
    },
    image :{
        type : String,
    },
    
},
{
    timestamp : true,
    }
);
const Product = new mongoose.model("Product", productSchema);
export default Product;