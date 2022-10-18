const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const {connectToMongo,getdb}=require('./dbconnect');


app.use(cors({origin:"http://localhost:3000"}))

// app.use('/',(req,res)=>{
//     res.send('Home')
// })

// app.listen(3001,()=>{
//     console.log('Running')
// })

app.get('/todo',(req,res)=>{
    const db=getdb();
    const collection=db.collection('project');
})