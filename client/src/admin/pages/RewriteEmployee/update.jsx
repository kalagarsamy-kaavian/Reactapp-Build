// import React from 'react';
// import { useEffect, useState } from "react";
// export default function Updateemp(){
//     const [emp,setEmp] = useState([]);
//     const [Empid,setEmpid] = useState('');
//     const [details,setDetails]=useState([]);
//     const [name1,setName] = useState('');
//     const [dob,setdob] = useState('');
//     const [phone1,setPhone] = useState('');
//     const [location1,setlocation1]=useState('');
//     useEffect(() => {
//         fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empaddid').then(res => res.json()).then(data => setEmp(data));
//     },[]);

//     const submit = (e) => {
//         fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empaddsearch',{
//             method:'POST',
//             body:JSON.stringify({Empid}),
//             headers:{'content-type':'application/json'}
//         })
//         .then(res => res.json())
//         .then(data => {setDetails(data);
//             console.log(details);
//         })
//     }

//     const upemp = () => {
        
//         fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empaddupdate',{
//             method:'PUT',
//             body:JSON.stringify({Empid,name1,dob,phone1,location1}),
//             headers:{'content-type':'application/json'}
//         }).then(res => res.json()).then(console.log(details));
//     }

//     return(
//         <body>
//         <center>
//             <h2>UPDATE THE EMPLOYEE</h2>
//             <br></br>
//             <select value={Empid} onChange={e => setEmpid(e.target.value)}>
//                 <option>EMPLOYEE ID </option>
//                 {emp.map(Empid=> <option>{Empid}</option>)}
//             </select>
//             <button  onClick={submit}>🔍</button>
//             <br></br>
//             <table>          
//                 <tr>
//                     <th> NAME</th>
//                     <th> DOB</th>
//                     <th> CONTACT</th>
//                     <th>LOCATION</th>
//                 </tr>
//                 {details.map(({Empname,DOB,Contact,location}) => (
//                     <tr>
//                         <td>{Empname}</td>
//                         <td>{DOB}</td>
//                         <td>{Contact}</td>
//                         <td>{location}</td>
//                     </tr>
//                 ))}

//             </table>
//             <form>                
//                 <h3>Name</h3>
//                 <input type='text' value={name1} onChange={(e) => setName(e.target.value)} /><br></br>
//                 <h3>DOB</h3>
//                 <input type='text' value={dob} onChange={(e) => setdob(e.target.value)} /><br></br>
//                 <h3>Contact</h3>
//                 <input type='text' value={phone1} onChange={(e) => setPhone(e.target.value)} /><br></br>
//                 <h3>Location</h3>
//                 <input type='text' value={location1} onChange={(e) => setlocation1(e.target.value)} /><br></br>
//         <center><button id='update' onClick={upemp}>UPDATE</button></center>
//         </form>
//         </center>
//         </body>
//     )
// }

import React from 'react';
import { useEffect, useState } from "react";
import "./RewriteEmployee.css";
import {AiFillEdit} from "react-icons/ai"
export default function Updateemp(){
    const [emp,setEmp] = useState([]);
    const [Empid,setEmpid] = useState('');
    const [details,setDetails]=useState([]);
    const [nname,setNname]=useState('');
    const [name1,setName] = useState('');
    const [dob,setdob] = useState('');
    const [phone1,setPhone] = useState('');
    const [location1,setlocation1]=useState('');
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empaddid`).then(res => res.json()).then(data => setEmp(data));
    },[]);
    

    const submit = (e) => {
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empaddsearch`,{
            method:'POST',
            body:JSON.stringify({Empid}),
            headers:{'content-type':'application/json'}
        })
        .then(res => res.json())
        .then(data => {setDetails(data);
            console.log(details);
        })
    }
    const updateClick=()=>{
        console.log('Enter the value')
    }
    
    const upemp = () => {
        
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empaddupdate`,{
            method:'put',
            body:JSON.stringify({Empid,nname,dob,phone1,location1}),
            headers:{'content-type':'application/json'}
        }).then(res => res.json()).then(console.log(details));
        console.log(dob)
        console.log(phone1)
        console.log(location1)
        setNname('')
        setdob('')
        setPhone('')
        setlocation1('')
        alert('Updated Successfully')
    }
    

    const updatelist =()=>{
        console.log('Clicked the icon')
        
    }
    return(
        <body>
        <center>
            <h2>UPDATE EMPLOYEE DATA</h2>
            <br></br>
            <select className='empiddrop' value={Empid} onChange={e => setEmpid(e.target.value)}>
                <option>EMPLOYEE ID </option>
                {emp.map(Empid=> <option>{Empid}</option>)}
            </select>
            <button className='findbtn' onClick={submit}>🔍</button>
            <br></br>
            {/* <table className='table1'>           */}
                {/* <tr>
                    <th> NAME</th>
                    <th> DOB</th>
                    <th> CONTACT</th>
                    <th> LOCATION</th>
                </tr> */}
                {details.map(({Empname,DOB,Contact,location}) => (

                    // <tr>
                    //     <td>{Empname}</td>
                    //     <td>{DOB}</td>
                    //     <td>{Contact}</td>
                    //     <td>{location}</td>
                    // </tr> </table>
            <form className='updateform'>                
                <span className='t1'>Name</span>
                <input type='text' name='nname' defaultValue={Empname} onChange={(e)=>setNname(e.target.value)}></input><br></br>
                <span className='t2'>DOB</span>
                <input type='text' name='dob' defaultValue={DOB} onChange={(e)=>setdob(e.target.value)}></input>
                <span className='t3'>Contact</span>
                <input type='number' name='phone1' defaultValue={Contact} onChange={(e)=>setPhone(e.target.value)}></input>
                 <span className='t4'>Location</span>
                <input type='text' name='location1' defaultValue={location} onChange={(e)=>setlocation1(e.target.value)}></input>
        </form>
        ))}

        <button className='updateformbtn' id='update' onClick={upemp}><span>UPDATE</span></button>
        <div className='updateimg'>
            <img src='/images/updateimg.svg'></img>
        </div>
        </center>
        </body>       

    )
}

// import React from "react";
// import { useState,useEffect } from "react";

// export default function Updateemp(){
//     const [Emp,setEmp]=useState([]);
//     const [details,setDetails]=useState([]);
//     const [Empid,setEmpid]=useState('');
//     const [name,setName]=useState('');

//     useEffect(()=>{
//         fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empaddid`).then(res => res.json()).then(data => setEmp(data));
//     },[]);

//     const submit =()=>{
//         fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empaddsearch`,{
//             method: 'POST',
//             body: JSON.stringify({ Empid }),
//             headers: { 'content-type': 'application/json' }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 setDetails(data);
//                         console.log(details);
//                     })
//     }

//     const update = () =>{
//         fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empaddupdate`, {
//             method: 'PUT',
//             body: JSON.stringify({ Empid, name}),
//             headers: { 'content-type': 'application/json' }
//         }).then(res => res.json()).then(console.log(details));
//     }
//     return (
//         <body>
//             <h2>UPDATE</h2>
//             <select className='empiddrop' value={Empid} onChange={(e) => setEmpid(e.target.value)}>
//                  <option>EMPLOYEE ID </option>
//                  {Emp.map(Empid=> <option>{Empid}</option>)}</select>
//             <button onClick={submit}>SEARCH</button>
//             <table>
//                 <tr>
//                     <th>NAME</th>
//                 </tr>
//                 {details.map(({Empname})=><tr>
//                     <td>{Empname}</td>
//                     <button onClick={update}>UPDATE</button>
//                 </tr>)}       
//             </table>
//         </body>
//     )
// }