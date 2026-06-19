const mongoose=require('mongoose')
async function connectDB(){
  try{
  await mongoose.connect(process.env.MONGO_URL)
     console.log("MongoDb Connected");
  }
  catch{
    console.log("DataBase Error");
  }
}
module.exports=connectDB