const jwt=require('jsonwebtoken')
function authMiddleware(req,res,next){
    try{
    const authHeader=req.headers.authorization;
    if(!authHeader){
      return res.status(401).json({
            message: "Authorization header missing",
        });
    }
    const token=authHeader.split(" ")[1] 
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    // console.log(decoded);
    req.user=decoded 
     next()
     }
     catch(err){
        res.status(400).json({msg:"Invalid or expired Token"})
     }
}
module.exports=authMiddleware