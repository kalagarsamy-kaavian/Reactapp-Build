const express=require('express');
const mongoose=require('mongoose');
const newModel=require('./script');
const newEmployee=require('./empscript');
const newUser=require('./login');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
app.use(cors({origin:'http://localhost:3000'}));
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://blueTeam:o9T62uCK3dt5V078@db-kaavian-sys-cluster-in1-966a0c87.mongo.ondigitalocean.com/blueDB?tls=true&authSource=admin&replicaSet=db-kaavian-sys-cluster-in1",(err)=>{
    if(!err) {
        console.log("db connected")
    }
    else{
        console.log("db error")
    }
})
app.get('/login',(req,res)=>{
    res.send(fs.readFileSync('./login.html',{encoding:'utf-8'}))
})

app.post('/login',async(req,res)=>{
    const{user,pass}=req.body;   
    // const db=getDB();
    // const collection=db.collection("userinfo");
    const use=await newUser.findOne({username:user})
    if(!use)
    {
         return res.send("invalid user")
    }
    else if(pass===use.password){
        //res.cookie('Username',user);
        return res.send(use);
    }
    // else{
    //     const msg="INVALID USERNAME OR PSSWORD"
    //                 res.send(msg);
    // }
});  
app.post("/employeedetail",async(req,res)=>{
    const{id}=req.body;
    // const db=getDB();
    // const collection=db.collection("details");
    await newEmployee.find({Empid:id}).then(data=>res.send(data))

})
app.get('/update', (req, res) => {
    newModel.find({}).then(updateStatus => {
        res.json(updateStatus);
    });
});

app.patch('/update', (req, res) => {
    const { updateStatus } = req.body;
    console.log(updateStatus);
    newModel.updateMany({ Teamname: updateStatus }, { $set: { Projectstatus: "ONGOING" }}).then(updateStatus => {
        res.json(updateStatus);
    })
})

app.post("/employeehistory",async(req,res)=>{
    const {id}=req.body;
    // const db=getDB();
    // const collection=db.collection("employeehistory");
    await newModel.find({Empid:id}).then(data=>res.send(data))
})
app.listen(3002, () => {
            console.log("Application is running.");
        });
  