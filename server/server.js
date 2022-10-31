const express=require('express');
const mongoose=require('mongoose');
const newModel=require('./script');
const newEmployee=require('./empscript');
const newUser=require('./login');
const app=express();
const cors=require('cors');
const path = require('path');
const fs = require('fs');
const bodyParser=require('body-parser');
const NODE_ENV = process.env.NODE_ENV || 'DEV';
const bcrypt = require('bcrypt');

app.use('/static', express.static(path.join(__dirname + '/../client/build/static')));
app.use('/images', express.static(path.join(__dirname + '/../client/build/images')));

app.use(cors({origin:'http://localhost:3000'}));
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://blueTeam:o9T62uCK3dt5V078@db-kaavian-sys-cluster-in1-966a0c87.mongo.ondigitalocean.com/blueDB?tls=true&authSource=admin&replicaSet=db-kaavian-sys-cluster-in1",(err)=>{
    if(!err) {
        console.log("db connected")
    }
    else{
        console.log("db error")
    }
});


app.get('/tlcount',(req,res)=>{
    // newModel.count({Projectstatus:"Ongoing"}).then(res=>res.json).then(data=>res.send(data));
    newModel.count({"Empstatus":"Team Leader"}).then(data=>res.json(data));  
})


app.get('/ongoing',(req,res)=>{
    // newModel.count({Projectstatus:"Ongoing"}).then(res=>res.json).then(data=>res.send(data));
    newModel.count({"Empstatus":"Team Leader","Projectstatus":"Ongoing"}).then(data=>res.json(data));  
})

app.get('/complete',(req,res)=>{
    // newModel.count({Projectstatus:"Ongoing"}).then(res=>res.json).then(data=>res.send(data));
    newModel.count({"Empstatus":"Team Leader","Projectstatus":"COMPLETED"}).then(data=>res.json(data));  
})



app.put('/test',async (req,res)=>{
    const{mem,memt,memr,memf,meme,pn,tn,d,start,end,pco,es,descr,pt}=req.body;
    const test= await newEmployee.find({$or:[{Empname:mem},{Empname:memt},{Empname:memr},{Empname:memf},{Empname:meme}]})
    let [frst,scnd,third,fourth,fifth]=test;
    newModel.create([{"Empid":frst.Empid,"Empname":frst.Empname,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":"Ongoing","Empstatus":"Team Leader","Description":descr,"Platform":pt},
        {"Empid":scnd.Empid,"Empname":scnd.Empname,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":"Ongoing","Empstatus":"Member","Description":descr,"Platform":pt},
        {"Empid":third.Empid,"Empname":third.Empname,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":"Ongoing","Empstatus":"Member","Description":descr,"Platform":pt},
        {"Empid":fourth.Empid,"Empname":fourth.Empname,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":"Ongoing","Empstatus":"Member","Description":descr,"Platform":pt},
        {"Empid":fifth.Empid,"Empname":fifth.Empname,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":"Ongoing","Empstatus":"Member","Description":descr,"Platform":pt}
    ]);
})

// app.delete('/emprecord',(req,res)=>{
// 	const data=req.body;
//     console.log(data.data);
//     newEmployee.deleteOne({"Empid": data.data}).then(data=>res.json(data));
//     console.log('deleted')
// })

app.patch('/remcomplete/:Teamname', (req, res) => {
    const { Teamname} = req.params;
    console.log('remcomplete',Teamname)
    //console.log(id);
   newModel.updateMany({Teamname:Teamname}, { $set: { Projectstatus: "COMPLETED" }}).then(updateStatus => {
       res.json(updateStatus);
   console.log('Btn updated')
   })
})

// app.post('/olist/:id',(req,res)=>{
//     const {id}=req.params;
//     // console.log(id)
//     newModel.find({$and:[{Empid:id},{Projectstatus:'Ongoing'}]}).then(data=>res.json(data))
// })

app.post('/olist/:id',(req,res)=>{
    const {id}=req.params;
     console.log(id)
    newModel.find({$and:[{Empid:id},{Projectstatus:'Ongoing'}]}).then(data=>{
        let[first,...rest]=data;
        
         res.json(first.Empstatus)
    })
})
app.post('/leaderteam/:id',(req,res)=>{
    const {id}=req.params;
     console.log(id)
    newModel.find({$and:[{Empid:id},{Projectstatus:'Ongoing'}]}).then(data=>{
        let[first,...rest]=data;
        //console.log(first.Teamname)
        res.json(first.Teamname)
    })
})

app.get('/remoid',(req,res)=>{
    newEmployee.distinct('Empid').then(data=>{res.send(data)})
    });
//Delete filter
app.delete('/emprecord',async (req,res)=>{
	const data=req.body;
    console.log(data.data);
   await newEmployee.deleteOne({"Empid": data.data}).then(data=>{return res.json(data)});
   //await newUser.deleteOne({"Empid":data.data}).then(data=>{return res.json(data)});
    console.log('deleted')
})

app.post('/empdelsearch', async(req,res) => {
    const {data} = req.body;
    await newEmployee.find({Empid:data}).then(data => {
        res.send(data)});
        console.log(data);
});

// app.post('/login',async(req,res)=>{
//     const{user,pass}=req.body;   
//     // const db=getDB();
//     // const collection=db.collection("userinfo");
//     const use=await newUser.findOne({username:user})
//     if(!use)
//     {
//         //  return res.json({invaliduser})
//         console.log("invalid")
//     }
//     else if(pass===use.password){
//         //res.cookie('Username',user);
//         return res.send(use);
//     }
//     // else{
//     //     const msg="INVALID USERNAME OR PSSWORD"
//     //                 res.send(msg);
//     // }
// });  
// app.post('/login',async(req,res)=>{
//     const {user,pass}=req.body;
//     // const db=getDB();
//     // const collection=db.collection("userinfo");

//     const use=await newUser.findOne({username:user})
//     console.log(use)
//     if(!use)
//     {
//          return res.status(404).send('invalid user')
//     }
//  else if(pass===use.password){
//         //res.cookie('Username',user);
//         return res.send(use);
//     }
//     // else{
//     //     const msg="INVALID USERNAME OR PSSWORD"
//     //                 res.send(msg);
//     // }
// })
app.post('/login',async(req,res)=>{
    const {user,pass}=req.body;
    const body = { user, pass};
    console.log(body);
    // const db=getDB();
    // const collection=db.collection("userinfo");
    const use=await newUser.findOne({username:user})

    console.log(use);
    if(use) {
        const validPassword = await bcrypt.compare(body.pass, use.password);
        console.log(body.pass, "pass1");
        console.log(use.password,"pass2");
        console.log(validPassword, "pass3")
        if (!validPassword) {
            res.status(400).json({ error: "Invalid password"});
            
        } else {
            // res.status(200).json({ message: "valid password"});
            // console.log(use);
            return res.json(use);
        }
    } else {
        res.status(401).json({ error: "User does not exist" });
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
    console.log(id)
    await newEmployee.find({Empid:id}).then(data=>res.json(data))

})
app.get('/update', (req, res) => {
    newModel.find({}).then(updateStatus => {
        res.json(updateStatus);
    });
});
app.delete('/emprecord',(req,res)=>{
	const data=req.body;
    console.log(data.data);
    newEmployee.deleteOne({"Empid": data.data}).then(data=>res.json(data));
    newUser.deleteOne({"Empid":data.data}).then(data=>res.json(data));
    console.log('deleted')
})
app.patch('/update', (req, res) => {
    const { updateStatus } = req.body;
    console.log(updateStatus);
    newModel.updateMany({ Teamname: updateStatus }, { $set: { Projectstatus: "COMPLETED" }}).then(updateStatus => {
        res.json(updateStatus);
    })
})

app.post("/employeehistory",async(req,res)=>{
    const {id}=req.body;
    // const db=getDB();
    // const collection=db.collection("employeehistory");
    await newModel.find({Empid:id}).then(data=>res.send(data))
})
app.post('/emprecord', async(req,res)=>{
	const {pass,input,dob,con,loc,doj,exp,speo,spet,sper,pt, role, password}=req.body;
    const body = {input, password};
    console.log(body);
    console.log('input')
	console.log('Inserted');
    if(!(body.input && body.password)) {
        return res.status(400).send({ error:"data format error"});
    }
    const user = new newUser(body);
    // const salt = await bcrypt.gensalt(6);
    user.password = await bcrypt.hash(user.password, 10);
    console.log(user);
	// // const db=getdb();
	// const collection=  db.collection('project');
    // user.save().then((doc) => res.status(201).send(doc));
	newEmployee.create({"Empid":pass,"Empname":input,"DOB":dob,"Contact":con,"location":loc,"DOJ":doj,"Experience":exp,"Specialized1":speo,"Specialized2":spet,"Specialized3":sper,"Platform":pt});
	// //console.log();
    newUser.create({"username":input,"password":user.password, "role":role, "Empid":pass});
    console.log(password);
})


app.post("/api/todo", (req, res) => {
    const {data}=req.body;
   console.log(data)
   
    if(data==='Completed')
    {
    newModel.find({$and:[{"Empstatus":"Team Leader"},{"Projectstatus":"COMPLETED"}]}).then(data => {
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



app.get('/assignspecial',(req,res)=>{
   
    newModel.distinct('Projectstatus').then(todoSpecial=>{
        res.json(todoSpecial);
    })
  
})
app.get('/assignname',(req,res)=>{
    newModel.distinct('Empname',{"Projectstatus":"COMPLETED"}).then(data=>res.json(data))
    .catch((err) =>{
    })
});
// app.post('/assignemprecord',(req,res)=>{
// 	const {pass,passt,passr,passf,passe,mem,memt,memr,memf,meme,pn,tn,d,start,end,pco,es,descr,pt}=req.body;
//     console.log('input')
// 	console.log('Inserted');
// 	// const db=getdb();
// 	// const collection=  db.collection('project');
// 	newModel.create([{"Empid":pass,"Empname":mem,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":pco,"Empstatus":es,"Description":descr,"Platform":pt},
//     {"Empid":passt,"Empname":memt,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":pco,"Empstatus":es,"Description":descr,"Platform":pt},
//     {"Empid":passr,"Empname":memr,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":pco,"Empstatus":es,"Description":descr,"Platform":pt},
//     {"Empid":passf,"Empname":memf,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":pco,"Empstatus":es,"Description":descr,"Platform":pt},
//     {"Empid":passe,"Empname":meme,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":pco,"Empstatus":es,"Description":descr,"Platform":pt}]);
// 	//console.log();
// })

app.post('/frstid/:mem',(req,res)=>{
    const{mem}=req.params;
    console.log(mem);
    
})

    // app.post('/assignemprecord',(req,res)=>{
    //     const {pass,passt,passr,passf,passe,mem,memt,memr,memf,meme,pn,tn,d,start,end,pco,es,descr,pt}=req.body;
    //     console.log('input')
    //     console.log(pass,passt,passr,passf,passe,mem,memt,memr,memf,meme,pn,tn,d,start,end,pco,es,descr,pt)
    //     console.log('Inserted');
    //     // const db=getdb();
    //     // const collection=  db.collection('project');
    //     newModel.create([{"Empid":pass,"Empname":mem,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":pco,"Empstatus":"Team Leader","Description":descr,"Platform":pt},
    //     {"Empid":passt,"Empname":memt,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":pco,"Empstatus":"Member","Description":descr,"Platform":pt},
    //     {"Empid":passr,"Empname":memr,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":pco,"Empstatus":"Member","Description":descr,"Platform":pt},
    //     {"Empid":passf,"Empname":memf,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":pco,"Empstatus":"Member","Description":descr,"Platform":pt},
    //     {"Empid":passe,"Empname":meme,"Projectname":pn,"Teamname":tn,"Duration":d,"Startingdate":start,"Endingdate":end,"Projectstatus":pco,"Empstatus":"Member","Description":descr,"Platform":pt}]);
    //     //console.log();
    // })

// app.post('/pass',(req,res)=>{
//     const{mem,memt,memr,memf,meme}=req.body;
//     console.log(mem,memt,meme,memr,memf)
//     console.log("check pass",mem)
//     newEmployee.find({Empname:mem}).then(data=>{
//         console.log(data)
//         let [first]=data;
//        console.log(data,"in pass query")
//             //     let[first]=data;
//                 let id=first.Empid;
//                console.log(id);
//                // res.json({id});
//             })
//             newEmployee.find({Empname:memt}).then(data=>{
//                                 let[second]=data;
//                                 let sid=second.Empid;
//                                console.log(sid);
//                                // res.json(sid);
//                             })
//                             newEmployee.find({Empname:memr}).then(data=>{
//                                         let[three]=data;
//                                         let tid=three.Empid
//                                         console.log(tid);
//                                       //  res.json(tid);
//                                     })
//                                     newEmployee.find({Empname:memf}).then(data=>{
//                                                 let[four]=data;
//                                                 let fid=four.Empid
//                                               console.log(fid);
//                                                // res.json(fid);
//                                             })
//                                             newEmployee.find({Empname:meme}).then(data=>{
//                                                         let[five]=data;
//                                                         let pid=five.Empid
//                                                        console.log(pid);
//                                                        // res.json(pid);
//                                                     })
//                                                     const a=[id,sid,tid,fid,pid]
//                                                     console.log(a,"a")
//                                                     res.json({})

// })

// app.post('/passt',(req,res)=>{
//     const{memt}=req.body;
//     console.log(memt)
//     newEmployee.find({Empname:memt}).then(data=>{
//                 let[second]=data;
//                 let sid=second.Empid;
//               //  console.log(second.Empid);
//                 res.json(sid);
//             })
// })
// app.post('/passr',(req,res)=>{
//     const{memr}=req.body;
//     newEmployee.find({Empname:memr}).then(data=>{
//         let[three]=data;
//         let tid=three.Empid
//       //  console.log(three.Empid);
//         res.json(tid);
//     })
// })
// app.post('/passf',(req,res)=>{
//     const{memf}=req.body;
//     newEmployee.find({Empname:memf}).then(data=>{
//         let[four]=data;
//         let fid=four.Empid
//        // console.log(four.Empid);
//         res.json(fid);
//     })
// })
// app.post('/passe',(req,res)=>{
//     const{meme}=req.body;
//     newEmployee.find({Empname:meme}).then(data=>{
//         let[five]=data;
//         let pid=five.Empid
//       //  console.log(five.Empid);
//         res.json(pid);
//     })
// })
    

app.get('/empaddid', (req,res) => {
    newEmployee.distinct('Empid').then(Empid => res.json(Empid));
});

app.post('/empaddsearch', async(req,res) => {
    const {Empid} = req.body;
    await newEmployee.find({Empid:Empid}).then(data => {
        res.send(data)});
});
app.put('/empaddupdate',async(req,res) => {
    const {Empid,nname,dob,phone1,location1} =req.body;
    console.log(location1);
    const up = await newEmployee.updateOne({Empid:Empid},{$set:{Empname:nname,DOB:dob,Contact:phone1,location:location1}})
    // if(nname)
    // {
    //     await newEmployee.updateOne({Empid:Empid},{$set:{Empname:nname}})
    // }
    // else if(dob)
    // {
    //     await newEmployee.updateOne({Empid:Empid},{$set:{DOB:dob}})
    // }
    // else if(phone1)
    // {
    //     await newEmployee.updateOne({Empid:Empid},{$set:{Contact:phone1}})
    // }
    // else if(location1)
    // {
    //     await newEmployee.updateOne({Empid:Empid},{$set:{location:location1}})
    // }
    // else{
    //     await newEmployee.update({Empid:Empid},{$set:[{Empname:nname,DOB:dob,Contact:phone1,location:location1}]})
    // }
    //console.log(up);
});


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

// app.get('/pms/Filter', (req, res) => {
// 	newEmployee.find({}).then(data => {
// 		res.json(data);
// 	});
// });
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

 
app.get('/tlcount',(req,res)=>{
    // newModel.count({Projectstatus:"Ongoing"}).then(res=>res.json).then(data=>res.send(data));
    newModel.count({"Empstatus":"Team Leader"}).then(data=>res.json(data));  
})


app.get('/tlongoing',(req,res)=>{
    // newModel.count({Projectstatus:"Ongoing"}).then(res=>res.json).then(data=>res.send(data));
    newModel.count({"Empstatus":"Team Leader","Projectstatus":"Ongoing"}).then(data=>res.json(data));  
})

app.get('/tlcomplete',(req,res)=>{
    // newModel.count({Projectstatus:"Ongoing"}).then(res=>res.json).then(data=>res.send(data));
    newModel.count({"Empstatus":"Team Leader","Projectstatus":"COMPLETED"}).then(data=>res.json(data));  
})
app.get('/empid1', async(req,res) => {
    await newEmployee.distinct('Empid').then(Empid => res.json(Empid));
    });
    app.post('/search1', async(req,res) => {
             const {Empid} = req.body;
             await newEmployee.find({Empid:Empid}).then(data => {
                 res.send(data)});
         });
     app.put('/rateemp',async(req,res) => {
             const {Empid,value} =req.body;
             console.log(Empid);
             const str=value.toString()
             console.log(str);
                     const up = await newEmployee.updateOne({Empid:Empid},{$set:{Rating:str}})
                     // const up1= await newUser.updateOne({Empid:Empid},{$set:{username:name1}})
                     console.log(up);
                     //console.log(up1);
                     // const up2 = await newModel.updateOne({Empid:Empid},{$set:{Empname:name1}})
                     // console.log(up2);
                 });
 
// for any other request, serve HTML in DIT environment (cloud env)
if (NODE_ENV === 'DIT') {
    const indexHTMLContent = fs.readFileSync(path.join(__dirname + '/../client/build/index.html'), 'utf8');
    console.log('Index')
    app.all('*', (req, res) => {
      res.send(indexHTMLContent);
    });
}

app.listen(3004, () => {
            console.log("Application is running.");
        });