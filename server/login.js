const mongoose=require('mongoose')

const newSchema=new mongoose.Schema({
  username:String,
  password:String,
  role:String,
  Empid:String
},{collection:'userlogins'})

const newUser=new mongoose.model("userlogins",newSchema)


module.exports=newUser;