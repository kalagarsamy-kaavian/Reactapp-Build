import React from "react";
import { Link } from "react-router-dom"
import {useEffect,useState} from "react"
import { useParams } from "react-router-dom"
export default function Assign()
{
    const Teamname=useParams()
    // console.log(EmpTeamname.TeamName)
    const [title,setTitle]=useState("")
    const [platform,setPlatform]=useState("")
    const [TeamName,setTeamName]=useState("")
    const [Descrip,setDescrip]=useState("")
    const [get,setGet]=useState([]);
    const [start,setStart]=useState("")
    const [end,setEnd]=useState("")
    const [duration,setDuration]=useState("")

    function update(){
     
     
       let [first,second,third,fourth,fifth]=get;
   
      
      fetch(`http://localhost:3002/assignwork/${first.Empid}/${first.Empname}/${second.Empid}/${second.Empname}/${third.Empid}/${third.Empname}/${fourth.Empid}/${fourth.Empname}/${fifth.Empid}/${fifth.Empname}/${title}/${platform}/${TeamName}/${Descrip}/${start}/${end}/${duration}`,{
        method:"post",
       
        headers:{'content-type':'application/json'}})
        console.log(get);
    }
    //   fetch(`http://localhost:3002/assignwork`,{
    //     method:"post",
    //    body:JSON.stringify({title,platform,TeamName,Descrip,start,end,duration}),
    //     headers:{'content-type':'application/json'}})
    // }
    useEffect(()=>{
      fetch(`http://localhost:3002/details/${Teamname.Teamname}`,{method:"post",headers:{"content-type":"application/json"}}).then(res=>(res.json())).then(data=>
      setGet(data))
    console.log(Teamname.Teamname)    
    },[])
    

    return<div className="mainoverall"> <div className="allocate">
      <label className="label">ProjectTitle:</label>
        <input className="title" type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)} required></input>
        <label className="label">Platform:</label>
        <input className="platform" type="text" placeholder="platform" onChange={(e)=>setPlatform(e.target.value)}></input>
        <label className="label">Team Name:</label>
        <input className="tname" type="text" placeholder="TeamName" onChange={(e)=>setTeamName(e.target.value)}></input>
        <label className="label">Description:</label>
        <input className="description"  type="text" placeholder="Description" onChange={(e)=>setDescrip(e.target.value)}></input>
        <label className="label">Starting Date:</label>
        <input className="sdate" type="date" placeholder="Starting Date" onChange={(e)=>setStart(e.target.value)}></input>
        <label className="label">Ending Date:</label>
        <input className="edate" type="date" placeholder="Ending Date" onChange={(e)=>setEnd(e.target.value)}></input>
        <label className="label">Duration:</label>
        <input className="duration" type="number" placeholder="Duration" onChange={(e)=>setDuration(e.target.value)}></input>
        
        <button className="button" onClick={update}><span>Update</span></button>
    </div>
    </div>
}
