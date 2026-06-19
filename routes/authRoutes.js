const User=require('../models/user')
const express=require('express')
const {signup,login}=require('../controllers/authControllers')
const authMiddleware=require('../middlewares/authMiddlewares')
const router=express.Router()
router.post('/signup',signup)
router.post('/login',login);
router.get('/profile',authMiddleware, async (req,res)=>{
   const user=await User.findById(req.user.id)
  res.json({
    msg:"welcome to userProfile",
    userInfo:user
  })
})
module.exports=router