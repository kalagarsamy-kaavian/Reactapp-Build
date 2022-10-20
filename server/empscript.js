const mongoose=require('mongoose')

const NewSchema=new mongoose.Schema({
   
  Empid:String,
  Empname:String,
  DOB:Date,
  Contact:Number,
  location:String,
  DOJ:Date,
  Experience:Number,
  Specialized1:String,
  Specialized2:String,
  Specialized3:String,
  Platform:String
},{collection:'employeenew'})

const newEmployee=new mongoose.model("employeenew",NewSchema)


module.exports=newEmployee;