import User from "../models/User.js";
import bcrypt from "bcryptjs";
import  {genrateToken} from "../lib/util.js"

export const singup =async (req,res)=>{
    
    const {fullname,email,password}=req.body;
    try{
    if(!fullname || !email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    if (password.length < 6) {
        return res.status(400)({message:"Password must be at least 6 charachter"});
    }
    // check if emails valids regex
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailregex.test(email)) {
        return res.status(400)({message:"Invalid Email format"});
    }
    const user =await User.findOne({email});
    if(user)return res.status(400)({message:"Email already exists"});
    // password hashing 1234=> $Dkjdydg-@?
    const salt = await bcrypt.genSalt(10)
    const hashpassword =await bcrypt.hash(password,salt);
    const newUser=new User({
        fullname,
        email,
        password:hashpassword,
    });

    if (newUser) {
        genrateToken(newUser._id,res);
        await newUser.save();

        res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        email:newUser.email,
        profilePic: newUser.profilePic,
        });
        
    }else{
        res.status(400).json({message:"Invalid user data"});
    }
    }catch(error){
       console.log("Error in signup crontroller",error);
       res.status(500).json({message:"somthing get wrong"});
    };
    
};
