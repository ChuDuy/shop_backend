import mongoose from "mongoose";
import { email } from "zod";
const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            require : true,
        },
        email : {
            type : String ,
            require : true,
            unique : true,
        },
        password :{
            type :String ,
            require : true,
        },
        role :
        {
            type : String,
            default : "user",
        }
        
    },
    { timestamps : true}
);
const User =mongoose.model("User", userSchema);
export default User;