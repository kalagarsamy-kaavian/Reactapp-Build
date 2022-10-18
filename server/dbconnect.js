const {MongoClient}=require('mongodb');
const client=new MongoClient('mongodb://localhost:27017');
let db;

function connectToMongo(){
    return new Promise((resolve,reject)=>{
        client.connect()   //connect with the local database
        .then(()=>{ //successfully connected.
            console.log('Connected to DATABASE');
            db=client.db("projectdb");
            resolve();
        })
        .catch(err=>{   //if the database failed to connect
            console.log("error");
            reject(err);
        })
    })
}

function getdb(){
    return db;
}

module.exports={
    connectToMongo,getdb
}