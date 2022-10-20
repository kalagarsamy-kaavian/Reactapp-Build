const mongoose=require('mongoose')

const newSchema=new mongoose.Schema({
  username:String,
  password:String,
  role:String,
  Empid:String
},{collection:'userlogin'})

const newUser=new mongoose.model("userlogin",newSchema)


module.exports=newUser;