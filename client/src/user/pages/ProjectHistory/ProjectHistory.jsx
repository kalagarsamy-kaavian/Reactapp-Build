import React,{useState,useEffect} from 'react';
// import { Link, useParams } from 'react-router-dom';
 import { useNavigate } from 'react-router-dom';
// import './todo.css'
export default function History(){
    const navigate=useNavigate();
    const id=localStorage.getItem('data');
    const[item,setItems]=useState([]);
    const [logout,setLogout]=useState(false);
    useEffect(()=>{
        fetch('http://localhost:3002/employeehistory',{method:"post",body:JSON.stringify({id}),headers:{'content-type':'application/json'}})
        .then(res=>res.json())
        .then(data=>setItems(data));
        console.log(item);

        if(!localStorage.getItem('data'))
            navigate('/');
    },[id]);
    useEffect(()=>{
    },[logout])

  const logoutPage=()=>{
      // e.preventDefault();
      localStorage.removeItem('data');
      setLogout(true);
  }
  
    return <div>
        <table border="5px" >
    <tr>
        <th>PROJECT TITLE</th>
        <th>TEAM NAME</th>
        <th>PROJECT DURATION(in months)</th>
        <th>PROJECT STARETED ON</th>
        <th>PROJECT COMPLETED ON</th>				
        <th>PROJECT STATUS</th>
        </tr>
        {item.map(({Projectname,Teamname,Duration,Startingdate,Endingdate,Projectstatus})=>(
            <tr>
            <td>{Projectname}</td>
            <td>{Teamname}</td>
            <td>{Duration}</td>
            <td>{Startingdate}</td>
            <td>{Endingdate}</td>
            <td>{Projectstatus}</td>
            </tr>
        ))}        
        </table>
        <button onClick={logoutPage}>LOGOUT</button>   
        </div>        
}

