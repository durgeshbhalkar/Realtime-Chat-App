import mongoose from "mongoose";

const userShema= new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
    },
    fullname:{
        type:String,
        require:true,
     
    },
    password:{
        type:String,
        require:true,
        minlength:6
    },
    profilePic:{
        type:String,
        default:""   
    },

},{timestamps:true}); // CretatedAt & UpdatedAt
const User = mongoose.model("User",userShema);

export default User;