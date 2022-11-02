const mongoose=require('mongoose')

const NewSchema=new mongoose.Schema({
  Empid:String,
  Empname:String,
  Projectname:String,
  Teamname:String,
  Duration:Number,
  Startingdate:String,
  Endingdate:String,
  Projectstatus:String,
  Empstatus:String,
  Description:String,
  Platform:String
},{collection:'projectdetails'})

const newModel= mongoose.model("projectdetails",NewSchema);

module.exports=newModel;