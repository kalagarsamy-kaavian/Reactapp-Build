import React from 'react';
import { useState } from 'react';
import "./RemoveEmployee.css"
import homeimg from './image1.svg';
// import './empinsert.css'
//import { Link } from 'react-router-dom';

export default function Rmemplist(){
	const  [data,setData]=useState('')
	console.log(data)
	function del(){
	fetch(`http://localhost:3001/emprecord`,{method:'delete',body:JSON.stringify({data}),headers:{'content-type':'application/json'}}).then(data=>console.log(data));
}

	return <div className='rem'><table className='deltabel'>
		<img src={homeimg} alt="projhome"/>
		<tr><td>Enter the Id : </td><input type="text" placeholder='Id' onChange={(e)=>setData(e.target.value)}></input></tr>
		<button classname="button" onClick={del}><span className='delbtn'>DELETE</span></button></table></div>
}