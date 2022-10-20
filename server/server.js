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

app.delete('/emprecord',(req,res)=>{
	const data=req.body;
    console.log(data.data);
    newEmployee.deleteOne({"Empid": data.data}).then(data=>res.json(data));
    console.log('deleted')
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
app.post('/emprecord',(req,res)=>{
	const {pass,input,dob,con,loc,doj,exp,speo,spet,sper,pt}=req.body;
    console.log('input')
	console.log('Inserted');
	// const db=getdb();
	// const collection=  db.collection('project');
	newEmployee.create({"Empid":pass,"Empname":input,"DOB":dob,"Contact":con,"location":loc,"DOJ":doj,"Experience":exp,"Specialized1":speo,"Specialized2":spet,"Specialized3":sper,"Platform":pt});
	//console.log();
})


app.post("/api/todo", (req, res) => {
    const {data}=req.body;
   console.log(data)
   
    if(data==='Completed')
    {
    newModel.find({$and:[{"Empstatus":"Team Leader"},{"Projectstatus":"Completed"}]}).then(data => {
        res.json(data);
    })
    }
    else if(data==="Ongoing")
    newModel.find({$and:[{"Empstatus":"Team Leader"},{"Projectstatus":"Ongoing"}]}).then(data => {
        res.json(data);
    })
    else{
    newModel.find({"Empstatus":"Team Leader"}).then(todoItem=>res.json(todoItem))
}})
app.post('/details/:Teamname',(req,res)=>{
   
   
    const{Teamname}=req.params;
    console.log(Teamname)
   
    newModel.find({"Teamname":Teamname}).then(data=>res.json(data))
})
app.post('/assignwork/:firstname/:secondname/:thirdname/:fourthname/:fifthname/:title/:platform/:TeamName/:Descrip/:start/:end/:duration',(req,res)=>{
   
    // const{}=req.body;
    const{firstid,firstname,secondid,secondname,thirdid,thirdname,fourthid,fourthname,fifthid,fifthname,title,platform,TeamName,Descrip,start,end,duration}=req.params;
     console.log(firstname)
     console.log(title)
     console.log(secondname)
 
    newModel.create([{"Empid":firstid,"Empname":firstname,"Teamname":TeamName,"Projectname":title,"Projectstatus":"Ongoing","Platform":platform,"Empstatus":"TEAM LEADER","Description":Descrip,"Startingdate":start,"Endingdate":end,"Duration":duration},
{"Empid":secondid,"Empname":secondname,"Teamname":TeamName,"Projectname":title,"Platform":platform,"Projectstatus":"Ongoing","Empstatus":"MEMBER","Description":Descrip,"Startingdate":start,"Endingdate":end,"Duration":duration},
{"Empid":thirdid,"Empname":thirdname,"Teamname":TeamName,"Projectname":title,"Platform":platform,"Projectstatus":"Ongoing","Empstatus":"MEMBER","Description":Descrip,"Startingdate":start,"Endingdate":end,"Duration":duration},
{"Empid":fourthid,"Empname":fourthname,"Teamname":TeamName,"Projectname":title,"Platform":platform,"Projectstatus":"Ongoing","Empstatus":"MEMBER","Description":Descrip,"Startingdate":start,"Endingdate":end,"Duration":duration},
{"Empid":fifthid,"Empname":fifthname,"Teamname":TeamName,"Projectname":title,"Platform":platform,"Projectstatus":"Ongoing","Empstatus":"MEMBER","Description":Descrip,"Startingdate":start,"Endingdate":end,"Duration":duration}
])
})




app.get('/special',(req,res)=>{
   
    newModel.distinct('Projectstatus').then(todoSpecial=>{
        res.json(todoSpecial);
    })
  
})


app.post("/api/todo/:Teamname",(req,res)=>{
    const{Teamname}=req.params;
    
newModel.find({Teamname:Teamname}).then(todoItems=>{
		//console.log(todoItems)
        res.json(todoItems)
    });
})

app.get('/pms/Filter', (req, res) => {
	newEmployee.find({}).then(data => {
		res.json(data);
	});
});
//Server run localhost3001 DB Data in Home
app.get('/pms/Hometl', (req, res) => {
	// const db = getDB();
	// db.collection('UserData').find({"EmpRole":"Team Leader"}).toArray().then(data => {
	// 	res.json(data);
	// });
	newModel.find({ "Empstatus": "Team Leader" }).then(data => {
		res.json(data);
	});
});

//dropdown in Platform in UserData
app.get('/platform', (req, res) => {
	// const db = getDB();
	// const collection = db.collection("UserData");

	newEmployee.distinct('Platform').then(data => {
		res.json(data);
	});
});

// filter in USerData
app.post('/search', (req, res) => {
	const { spc, empplatform } = req.body;
	console.log(spc, empplatform);
	console.log(typeof (empplatform));
	if (spc || empplatform) {
		newEmployee.find({ $or: [{ "Specialized1": spc }, { "Specialized2": spc }, { "Specialized3": spc }, { "Platform": empplatform }] }).then(data => res.json(data))
	}
	else {
		res.send('Null')
	}
});



app.listen(3002, () => {
            console.log("Application is running.");
        });
  