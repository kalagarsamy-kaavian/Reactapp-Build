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
// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import {  AiFillDelete } from "react-icons/ai";
// import "./RemoveEmployee.css"
// import homeimg from './image1.svg';
// // import './empinsert.css'
// //import { Link } from 'react-router-dom';

// export default function Rmemplist(){
// 	const  [data,setData]=useState('')
// 	const [id,setId]=useState([]);
// 	console.log(id);
// 	console.log(data)

// 	//Fetch data from the db
// 	useEffect(()=>{
// 		fetch(`http://localhost:3002/id`).then(res=>res.json()).then(data=>setId(data));
// 	},[])
// 		function deleteRec(){
// 	fetch(`http://localhost:3002/emprecord`,{method:'delete',body:JSON.stringify({data}),headers:{'content-type':'application/json'}}).then(res=>res.json()).then(val=>setData(val));
// }
// 	return (<div>
// 		<h2>ID</h2>
// 		<label className='id'>EMPID</label>
// 		<select value={data} onChange={e=>setData(e.target.value)}>
// 		<option value="" disablevalue>EMPID</option>
// 			{id.map(val=><option>{val}</option>)}
// 		</select>
// 		<button onClick={deleteRec}><AiFillDelete  /></button>
// 	</div>

// 	)


// 	// return <div className='rem'><table className='deltabel'>
// 	// 	<img src={homeimg} alt="projhome"/>
// 	// 	<tr><td>Enter the Id : </td><input type="text" placeholder='Id' onChange={(e)=>setData(e.target.value)}></input></tr>
// 	// 	<button classname="button" onClick={del}><span className='delbtn'>DELETE</span></button></table></div>
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
	const [info,setInfo]=useState([]);
	console.log(id);
	console.log(data)

	//Fetch data from the db
	useEffect(()=>{
		fetch(`${process.env.REACT_APP_SERVER_PREFIX}/id`).then(res=>res.json()).then(data=>setId(data));
	},[])
		function deleteRec(){
	fetch(`${process.env.REACT_APP_SERVER_PREFIX}/emprecord`,{method:'delete',body:JSON.stringify({data}),headers:{'content-type':'application/json'}}).then(res=>res.json()).then(val=>setData(val));
}
	const search = () => {
		fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empdelsearch`, {
			method:'POST',body:JSON.stringify({data}),headers:{'content-type':'application/json'}
		}).then(res => res.json()).then(data => {setInfo(data)});
	}

	return (<div className='deloverall'>
		<h2>REMOVE EMPLOYEE</h2>
		<label className='id'>EMPID : </label>
		<select className='empidselect' value={data} onChange={e=>setData(e.target.value)}>
		<option value="" disablevalue>EMPID</option>
			{id.map(val=><option>{val}</option>)}
		</select>
		<button className='sbtn' onClick={search}><span>search</span></button>
		<table className='deltable'>
			<tr>
				<th>Name</th>
				<th>DOB</th>
				<th>Contact</th>
				<th>Location</th>
			</tr>
			{info.map(({Empname,DOB,Contact,location})=> (
				<tr>
					<td>{Empname}</td>
					<td>{DOB}</td>
					<td>{Contact}</td>
					<td>{location}</td>
				</tr>
			))}
		</table>
		<button className='delbtn' onClick={deleteRec}><span><AiFillDelete  /></span></button>
		<div className='deleteempimg'>
			<img src='/images/deleteemp.svg'></img>
		</div>
	</div>

	)


	// return <div className='rem'><table className='deltabel'>
	// 	<img src={homeimg} alt="projhome"/>
	// 	<tr><td>Enter the Id : </td><input type="text" placeholder='Id' onChange={(e)=>setData(e.target.value)}></input></tr>
	// 	<button classname="button" onClick={del}><span className='delbtn'>DELETE</span></button></table></div>
}