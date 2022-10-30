const mongoose=require('mongoose')

const NewSchema=new mongoose.Schema({
   
  Empid:String,
  Empname:String,
  DOB:String,
  Contact:Number,
  location:String,
  DOJ:String,
  Experience:Number,
  Specialized1:String,
  Specialized2:String,
  Specialized3:String,
  Platform:String,
  Rating:String
},{collection:'employeenew'})

const newEmployee=new mongoose.model("employeenew",NewSchema)


module.exports=newEmployee;