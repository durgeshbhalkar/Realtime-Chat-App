 import jwt from "jsonwebtoken";

 export const genrateToken=(userId,res)=>{
    //
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d",
    });

    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000, //mili second
        httpOnly: true, //prevent XSS attacks : cross-site scripting
        sameSite:"strict", //csrf attacts
        secure: process.env.NODE_ENV ==="development" ? false : true,
        });
        return token;
 };