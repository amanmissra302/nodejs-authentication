const User=require('../models/user.js')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
async function login(req,res){
      const {email,password}=req.body;
      if(!email || !password){
        return res.status(400).json({message:"Field is missing"})
      }
      const user=await User.findOne({email});
      if(!user){
        return res.status(401).json({message:"Invalid Credentials"});
      }
      const isMatch=await bcrypt.compare(password,user.password);
      if(!isMatch){
          return res.status(401).json({message:"Invalid Credentials"});
      }
      const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
      res.status(200).json({
        success:true,
        message:"login successful",
        token,
         user: {
        id: user._id,
        name: user.name,
        email: user.email
    }
      })


}
async function signup(req,res){
  try{
  const {name,email,password}=req.body;
  if(!name || !email || !password){
    return res.status(400).json({message:"All fields are required"})
  }
  const existingUser=await User.findOne({email});
  if(existingUser){
    return res.status(401).json({message:"User already Exists"});
  }
  const hassedPassword= await bcrypt.hash(password,10)
  await User.create({
    name,
    email,
    password:hassedPassword
  })
  return res.status(201).json({"message":"User Created"})
}
catch(error){
    return res.status(500).json({
        message: "Internal Server Error",
    });
}

}
module.exports={
  signup,
  login,
}