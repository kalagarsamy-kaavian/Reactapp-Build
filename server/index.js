const express=require('express');
const fs=require('fs');
const {connectToMongo,getdb}=require('./dbconnect');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());

app.use('/static',express.static('static'));
app.use(bodyParser.json());


// app.use((req,res,next)=>{
//     if(req.path == '/adminlogin'){
//         res.redirect('/adminlogin');
//     }
//     next();
//     // console.log('Incoming Cookies:',req.cookies);
//     // res.cookie('userid','1234567890');
//     // next();
// });

app.get('/',(req,res)=>{
    const html=fs.readFileSync(__dirname+'/login.html',{encoding:'utf-8'});
    res.send(html);
})

app.get('/adminlogin',(req,res)=>{
    const adhtml=fs.readFileSync(__dirname+'/admin.html',{encoding:'utf-8'});
    res.send(adhtml);
})

app.get('/message',(req,res)=>{
    const a=fs.readFileSync(__dirname+'/message.html',{encoding:'utf-8'});
    res.send(a);
    // const db=getdb();
    // const collection=db.collection("project");
    // collection.find({}).toArray().then(todoItem=>{console.log(todoItem)})
})


app.get('/todo',(req,res)=>{
    const db=getdb();
    const collection=db.collection("admin");
    collection.find({}).toArray().then(todoItem=>{res.json(todoItem)})
})

app.get('/update',(req,res)=>{
    res.send('Assigned')
})

app.post('/adminlogin',async (req,res)=>{
    //const login=fs.readFileSync(__dirname+'/admin.html',{encoding:'utf-8'});
    //res.send(login);
    const {adminname}=req.body;
    const db=getdb();
    const collection=db.collection('admin');
    console.log(adminname);
    const aname=await collection.find({admin:adminname});
    console.log('Name',aname);
    if(aname){
        return res.redirect('/message');
    }
    res.redirect('/adminlogin?error=INVALID_USER')
})


// app.listen(3001,()=>{
//     console.log('Server');
// })


connectToMongo()
    .then(()=>{
        console.log('Database Connected');
        app.listen(3001,()=>{
            console.log("Application is running...")
        })
    })
    .catch(err=>{ //if failed 
        console.log("Unable")
    })

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors=require('cors');

// app.use(cors({origin:"http://localhost:3000"}))

// const { connectToMongo, getdb } = require('./dbconnect');
// const { ObjectId } = require('mongodb');

// app.use(bodyParser.json());
// app.get('/message', (req, res) => {
// 	//res.send('Hello world')
// 	const db = getdb();
// 	const collection = db.collection("project");
// 	collection.find({}).toArray().then(data => {
// 		res.json(data);
// 	});
// })

// // app.get('/api/todo/:id',(req,res)=>{
// // 	const {id}=req.params;
// // 	console.log("The id : ",id);
	
// // 	const db=getdb();
// // 	const collection=db.collection("first");
// // 	collection.find({ _id: ObjectId(id)}).toArray().then(data=>{
// // 		res.json(data);
// // 	});
// // })

// connectToMongo()
// 	.then(() => {
// 		console.log('Database Connected...');
// 		app.listen(3001, () => {
// 			console.log('Server Started...');
// 		});
// 	})
// 	.catch(err => {
// 		console.log('Server Not Running...')
// 	});