const express = require('express');
const mongoose = require('mongoose');
const newModel = require('./script');
const newEmployee = require('./empscript');
const newUser = require('./login');
const app = express();
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const NODE_ENV = process.env.NODE_ENV || 'DEV';
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "dmbjskkfjckmxkcjskdi";
// const LocalStorage= require('node-localstorage').LocalStorage;
// global.localStorage=new LocalStorage('./scratch');

app.use('/static', express.static(path.join(__dirname + '/../client/build/static')));

app.use('/images', express.static(path.join(__dirname + '/../client/build/images')));

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://blueTeam:o9T62uCK3dt5V078@db-kaavian-sys-cluster-in1-966a0c87.mongo.ondigitalocean.com/blueDB?tls=true&authSource=admin&replicaSet=db-kaavian-sys-cluster-in1", (err) => {
  if (!err) {
    console.log("db connected")
  }
  else {
    console.log("db error")
  }
});
//Authorization serverside ///////////////////NEEDED/////////////////
// app.use(async (req, res, next) => {
//   if (localStorage.getItem('token')) {
//     const token = localStorage.getItem('token');
//     const { user } = jwt.verify(token, JWT_SECRET_KEY);
//     const Role = user.role;
//     const isadminUrl = req.url.slice(0, 6) === '/admin';
//     const isuserUrl = req.url.slice(0, 5) === '/user';
//     if (Role === 'User' && isadminUrl) {
//       return res.sendStatus(404);
//     } else if (Role === 'Admin' && isuserUrl) {
//       return res.sendStatus(404);
//     }
//     next();
//   }
// });


 //Teamleadcount
app.get('/tlcount', (req, res) => {
  // newModel.count({Projectstatus:"Ongoing"}).then(res=>res.json).then(data=>res.send(data));
  newModel.count({ "Empstatus": "Team Leader" }).then(data => res.json(data));
})


app.get('/ongoing', (req, res) => {
  // newModel.count({Projectstatus:"Ongoing"}).then(res=>res.json).then(data=>res.send(data));
  newModel.count({ "Empstatus": "Team Leader", "Projectstatus": "Ongoing" }).then(data => res.json(data));
})

app.get('/complete', (req, res) => {
  // newModel.count({Projectstatus:"Ongoing"}).then(res=>res.json).then(data=>res.send(data));
  newModel.count({ "Empstatus": "Team Leader", "Projectstatus": "COMPLETED" }).then(data => res.json(data));
})



app.put('/test', async (req, res) => {
  const { mem, memt, memr, memf, meme, pn, tn, d, start, end, pco, es, descr, pt } = req.body;
  const test = await newEmployee.find({ $or: [{ Empname: mem }, { Empname: memt }, { Empname: memr }, { Empname: memf }, { Empname: meme }] })
  let [frst, scnd, third, fourth, fifth] = test;
  newModel.create([{ "Empid": frst.Empid, "Empname": frst.Empname, "Projectname": pn, "Teamname": tn, "Duration": d, "Startingdate": start, "Endingdate": end, "Projectstatus": "Ongoing", "Empstatus": "Team Leader", "Description": descr, "Platform": pt },
  { "Empid": scnd.Empid, "Empname": scnd.Empname, "Projectname": pn, "Teamname": tn, "Duration": d, "Startingdate": start, "Endingdate": end, "Projectstatus": "Ongoing", "Empstatus": "Member", "Description": descr, "Platform": pt },
  { "Empid": third.Empid, "Empname": third.Empname, "Projectname": pn, "Teamname": tn, "Duration": d, "Startingdate": start, "Endingdate": end, "Projectstatus": "Ongoing", "Empstatus": "Member", "Description": descr, "Platform": pt },
  { "Empid": fourth.Empid, "Empname": fourth.Empname, "Projectname": pn, "Teamname": tn, "Duration": d, "Startingdate": start, "Endingdate": end, "Projectstatus": "Ongoing", "Empstatus": "Member", "Description": descr, "Platform": pt },
  { "Empid": fifth.Empid, "Empname": fifth.Empname, "Projectname": pn, "Teamname": tn, "Duration": d, "Startingdate": start, "Endingdate": end, "Projectstatus": "Ongoing", "Empstatus": "Member", "Description": descr, "Platform": pt }
  ]);
})


app.patch('/remcomplete/:Teamname', (req, res) => {
  const { Teamname } = req.params;
  console.log('remcomplete', Teamname)
  //console.log(id);
  newModel.updateMany({ Teamname: Teamname }, { $set: { Projectstatus: "COMPLETED" } }).then(updateStatus => {
    res.json(updateStatus);
    console.log('Btn updated')
  })
})



app.post('/olist/:id', (req, res) => {
  const { id } = req.params;
  console.log(id)
  newModel.find({ $and: [{ Empid: id }, { Projectstatus: 'Ongoing' }] }).then(data => {
    let [first, ...rest] = data;

    res.json(first.Empstatus)
  })
})
app.post('/leaderteam/:id', (req, res) => {
  const { id } = req.params;
  console.log(id)
  newModel.find({ $and: [{ Empid: id }, { Projectstatus: 'Ongoing' }] }).then(data => {
    let [first, ...rest] = data;
    res.json(first.Teamname)
  })
})

app.get('/remoid', (req, res) => {
  newEmployee.distinct('Empid').then(data => { res.send(data) })
});


app.post('/empdelsearch', async (req, res) => {
  const { data } = req.body;
  await newEmployee.find({ Empid: data }).then(data => {
    res.send(data)
  });
  console.log(data);
});


app.post('/tokenDecode', async (req, res) => {
  const { token } = req.body;
  console.log(token);
  const { user } = jwt.verify(token, "dmbjskkfjckmxkcjskdi");

  const userId = user.Empid;
  const userRole = user.role;

  await newUser.findOne({ $and: [{ Empid: userId }, { role: userRole }] })
    .then((data) => {
      return res.json(data);
    })
})

app.post('/login', async (req, res) => {
  const { user, pass } = req.body;
  const body = { user, pass };


  console.log(body);
  // const db=getDB();
  // const collection=db.collection("userinfo");
  const use = await newUser.findOne({ username: user })

  console.log(use);
  if (use) {
    const validPassword = await bcrypt.compare(body.pass, use.password);
    console.log(body.pass, "pass1");
    console.log(use.password, "pass2");
    console.log(validPassword, "pass3")
    if (!validPassword) {
      res.status(400).json({ error: "Invalid password" });

    } else {
      // res.status(200).json({ message: "valid password"});
      // console.log(use);
      const token = jwt.sign({ user: use }, "dmbjskkfjckmxkcjskdi");
      return res.json({ token, use });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
});


app.post("/employeedetail", async (req, res) => {
  const { Id } = req.body;
  // const db=getDB();
  // const collection=db.collection("details");
  console.log(Id)
  await newEmployee.find({ Empid: Id }).then(data => res.json(data))


})
app.get('/update', (req, res) => {
  newModel.find({}).then(updateStatus => {
    res.json(updateStatus);
  });
});
app.delete('/emprecord', (req, res) => {
  const data = req.body;
  console.log(data.data);
  newEmployee.deleteOne({ "Empid": data.data }).then(data => res.json(data));
  newUser.deleteOne({ "Empid": data.data }).then(data => res.json(data));
  console.log('deleted')
})
app.patch('/update', (req, res) => {
  const { updateStatus } = req.body;
  console.log(updateStatus);
  newModel.updateMany({ Teamname: updateStatus }, { $set: { Projectstatus: "COMPLETED" } }).then(updateStatus => {
    res.json(updateStatus);
  })
})


app.post("/employeehistory", async (req, res) => {
  const { Id } = req.body;
  // const db=getDB();
  // const collection=db.collection("employeehistory");
  await newModel.find({ Empid: Id }).then(data => res.send(data))

})

app.post('/emprecord', async (req, res) => {
  console.log('Add');
  const { pass, input, dob, con, loc, doj, exp, speo, spet, sper, pt, role, password } = req.body;
  const body = { input, password };
  console.log(body);
  console.log(input)

  console.log('Inserted');
  if (!(body.input && body.password)) {
    return res.status(400).send({ error: "data format error" });
  }
  const user = new newUser(body);
  user.password = await bcrypt.hash(user.password, 10);
  console.log(user);


  newEmployee.create([{ "Empid": pass, "Empname": input, "DOB": dob, "Contact": con, "location": loc, "DOJ": doj, "Experience": exp, "Specialized1": speo, "Specialized2": spet, "Specialized3": sper, "Platform": pt }])
    .then(() => {
      res.json({ msg: 'Success' });
    }).catch((err) => {
      console.log('Error', err);
      res.json({ err: 'already exist..' });
    });

  newUser.create({ "username": input, "password": user.password, "role": role, "Empid": pass });
  console.log(password);
});


app.post("/api/todo", (req, res) => {
  const { data } = req.body;
  console.log(data)

  if (data === 'Completed') {
    newModel.find({ $and: [{ "Empstatus": "Team Leader" }, { "Projectstatus": "COMPLETED" }] }).then(data => {
      res.json(data);
    })
  }
  else if (data === "Ongoing")
    newModel.find({ $and: [{ "Empstatus": "Team Leader" }, { "Projectstatus": "Ongoing" }] }).then(data => {
      res.json(data);
    })
  else {
    newModel.find({ "Empstatus": "Team Leader" }).then(todoItem => res.json(todoItem))
  }
})

app.post('/details/:Teamname', (req, res) => {


  const { Teamname } = req.params;
  console.log(Teamname)

  newModel.find({ "Teamname": Teamname }).then(data => res.json(data))
})



app.get('/assignspecial', (req, res) => {

  newModel.distinct('Projectstatus').then(todoSpecial => {
    res.json(todoSpecial);
  })

})
app.get('/assignname', (req, res) => {
  newModel.distinct('Empname', { "Projectstatus": "COMPLETED" }).then(data => res.json(data))
    .catch((err) => {
    })
});



app.post('/frstid/:mem', (req, res) => {
  const { mem } = req.params;
  console.log(mem);


})




app.get('/empaddid', (req, res) => {
  newEmployee.distinct('Empid').then(Empid => res.json(Empid));
});

app.post('/empaddsearch', async (req, res) => {
  const { Empid } = req.body;

  await newEmployee.findOne({ Empid: Empid }).then(data => {
    console.log('server', data)
    res.json(data)
  })
});
app.put('/empaddupdate', async (req, res) => {
  const { Empid, Empname, Dob, Phone, Location } = req.body;
  console.log('Name : ', Empname);
  console.log('Empid : ', Empid);
  //const query={};
  // if(nname){
  //     query.Empname={nname};
  // }
  await newEmployee.updateOne({ Empid: Empid }, { $set: { "Empname": Empname, "DOB": Dob, "Contact": Phone, "location": Location } })
});


app.get('/special', (req, res) => {

  newModel.distinct('Projectstatus').then(todoSpecial => {
    res.json(todoSpecial);
  })

})


app.post("/api/todo/:Teamname", (req, res) => {
  const { Teamname } = req.params;

  newModel.find({ Teamname: Teamname }).then(todoItems => {
    //console.log(todoItems)
    res.json(todoItems)
  });
})
//Filter 
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

//dropdown in Rating in UserData
app.get('/rating', (req, res) => {
  newEmployee.distinct('Rating').then(data => {
    res.json(data);
  });
});


// filter in USerData
app.post('/search', (req, res) => {

  const { spc, empplatform, emprating } = req.body;
  const adminsearch = new RegExp(spc, 'i');
  console.log({ spc, empplatform, emprating }, '123');
  console.log(typeof (empplatform));
  console.log(typeof (emprating));

  newEmployee.find({ $or: [{ Specialized1: adminsearch }, { Specialized2: adminsearch }, { Specialized3: adminsearch }, { Platform: empplatform }, { Rating: emprating }] }).then(data => res.json(data))

});

app.get('/tlcount', (req, res) => {
  // newModel.count({Projectstatus:"Ongoing"}).then(res=>res.json).then(data=>res.send(data));
  newModel.count({ "Empstatus": "Team Leader" }).then(data => res.json(data));
})


app.get('/tlongoing', (req, res) => {
  newModel.count({ "Empstatus": "Team Leader", "Projectstatus": "Ongoing" }).then(data => res.json(data));
})

app.get('/tlcomplete', (req, res) => {
  newModel.count({ "Empstatus": "Team Leader", "Projectstatus": "COMPLETED" }).then(data => res.json(data));
})
app.get('/empid1', async (req, res) => {
  await newEmployee.distinct('Empid').then(Empid => res.json(Empid));
});

app.post('/search1', async (req, res) => {
  const { Empid } = req.body;
  await newEmployee.find({ Empid: Empid }).then(data => {
    res.send(data)
  });
});

app.put('/rateemp', async (req, res) => {
  const { Empid, value } = req.body;
  console.log(Empid);
  const str = value.toString()
  console.log(str);
  const up = await newEmployee.updateOne({ Empid: Empid }, { $set: { Rating: str } })
  console.log(up);

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
