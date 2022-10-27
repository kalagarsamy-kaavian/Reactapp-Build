//const express=require('express')
//const app=express()

const mongoose=require('mongoose')

const NewSchema=new mongoose.Schema({
  Empid:{type:String,unique:true,index:true,required:true},
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

// mongoose.connect("mongodb+srv://blueTeam:o9T62uCK3dt5V078@db-kaavian-sys-cluster-in1-966a0c87.mongo.ondigitalocean.com/blueDB?tls=true&authSource=admin&replicaSet=db-kaavian-sys-cluster-in1",(err)=>{
//     if(!err) {
//         console.log("db connected")
//     }
//     else{
//         console.log("db error")
//     }
// })

module.exports=newModel;