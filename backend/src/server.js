//const express = require('express');

import express from "express";  
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js"
import massageRoutes from "./routes/massage.route.js";

dotenv.config();
const app=express();
const PORT=process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/massages", massageRoutes);

app.listen(3000, ()=> console.log("Server is runing on poart no 3000 555 " + PORT));
