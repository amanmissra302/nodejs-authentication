const express=require('express')
const connectDB=require('./config/db.js')
const authRoutes=require('./routes/authRoutes.js')
const app=express()
require('dotenv').config()
connectDB();
app.use(express.json())
app.use('/api/auth',authRoutes);
app.listen(process.env.PORT,()=> console.log('Server Started'))