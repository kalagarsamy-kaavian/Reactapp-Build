import React,{useEffect,useState} from "react";
//import { Link } from "react-router-dom";

export default function Todo(){
    const [items,setItems]=useState([]);
    //const [log,setLog]=useState([]);
    useEffect(()=>{
    fetch('./todo')
    .then(res=>res.json())
    .then(data=>setItems(data));
    // fetch('/adminlogin',{method:'post',body:JSON.stringify({log}),headers:{'content-type':'application/json'}})
    // .then(res=>res.json())
    // .then(data=>setLog(data));
    },[])
    
        return <table border="1">
            <h2>ADMIN: UPDATE</h2>
            <tr>
                <th>NAME</th>
                <th>PROJECTTITLE</th>
                <th>TEAM</th>
                <th>PLATFORM</th>
                <th>SPECIALIZED</th></tr>
                {items.map(({name,projecttitle,team,platform,specialized})=>(
                    <tr>
                        <td>{name}</td>
                        <td>{projecttitle}</td>
                        <td>{team}</td>
                        <td>{platform}</td>
                        <td>{specialized}</td>
                        <button>UPDATE</button>
                    </tr>
                ))}
         </table>    
}
