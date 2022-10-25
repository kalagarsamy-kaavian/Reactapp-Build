// import React from 'react';
// import { useState } from 'react';
// import "./RemoveEmployee.css"
// import homeimg from './image1.svg';
// // import './empinsert.css'
// //import { Link } from 'react-router-dom';

// export default function Rmemplist(){
// 	const  [data,setData]=useState('')
// 	console.log(data)
// 	function del(){
// 	fetch(`http://localhost:3002/emprecord`,{method:'delete',body:JSON.stringify({data}),headers:{'content-type':'application/json'}}).then(data=>console.log(data));
// }

// 	return <div className='rem'><table className='deltabel'>
// 		<img src={homeimg} alt="projhome"/>
// 		<tr><td>Enter the Id : </td><input type="text" placeholder='Id' onChange={(e)=>setData(e.target.value)}></input></tr>
// 		<button classname="button" onClick={del}><span className='delbtn'>DELETE</span></button></table></div>
// }
import React, { useEffect } from 'react';
import { useState } from 'react';
import {  AiFillDelete } from "react-icons/ai";
import "./RemoveEmployee.css"
import homeimg from './image1.svg';
// import './empinsert.css'
//import { Link } from 'react-router-dom';

export default function Rmemplist(){
	const  [data,setData]=useState('')
	const [id,setId]=useState([]);
	console.log(id);
	console.log(data)

	//Fetch data from the db
	useEffect(()=>{
		fetch(`http://localhost:3002/id`).then(res=>res.json()).then(data=>setId(data));
	},[])
		function deleteRec(){
	fetch(`http://localhost:3002/emprecord`,{method:'delete',body:JSON.stringify({data}),headers:{'content-type':'application/json'}}).then(res=>res.json()).then(val=>setData(val));
}
	return (<div>
		<h2>ID</h2>
		<label className='id'>EMPID</label>
		<select value={data} onChange={e=>setData(e.target.value)}>
		<option value="" disablevalue>EMPID</option>
			{id.map(val=><option>{val}</option>)}
		</select>
		<button onClick={deleteRec}><AiFillDelete  /></button>
	</div>

	)


	// return <div className='rem'><table className='deltabel'>
	// 	<img src={homeimg} alt="projhome"/>
	// 	<tr><td>Enter the Id : </td><input type="text" placeholder='Id' onChange={(e)=>setData(e.target.value)}></input></tr>
	// 	<button classname="button" onClick={del}><span className='delbtn'>DELETE</span></button></table></div>
}