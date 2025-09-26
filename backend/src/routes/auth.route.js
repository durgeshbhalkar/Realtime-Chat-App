import express from "express";

const router=express.Router();

router.get("/singup",(req,res)=>{
    res.send("singup endpoind");
});

router.get("/login",(req,res)=>{
    res.send("login endpoint");

});

router.get("/logout", (req,res)=>{
    res.send("logout endpoint");
});

export default router;