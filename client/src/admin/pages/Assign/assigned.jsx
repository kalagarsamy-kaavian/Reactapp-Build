
import React, { useEffect } from 'react';
import { useState } from 'react';
import './assigned.css'
//import "./UpdateEmployee.css"
import { Link } from 'react-router-dom';

export default function Emplist() {
    const [name,setName]=useState([]);
    const [mem,setMem]=useState('');
    const [memt,setMemt]=useState('');
    const [memr,setMemr]=useState('');
    const [memf,setMemf]=useState('');
    const [meme,setMeme]=useState('');
    const [pco,setPco]=useState('')
    const [tn, setTn] = useState("");
    const [ps, setPs] = useState("");
    const [pn, setPn] = useState("");
    const [pt, setPt] = useState("");
    const [es,setEs]=useState("");
    const [d,setD]=useState('');
    const [start,setStart]=useState("");
    const [end,setEnd]=useState("");
    const [descr,setDescr]=useState("");
    const [spec,setSpec]=useState([]);
    const [frstid,setfrstid]=useState("");
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/assignname`).then(res => res.json()).then(data => setName(data));
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/assignspecial`).then(res => res.json()).then(data => setSpec(data));
    },[])
    function func() {
        //if(mem && memt && memr && memf && meme && pn && tn && d && start && end && pco && es && descr && pt)
       // fetch(`${process.env.REACT_APP_SERVER_PREFIX}/assignemprecord`, { method: 'post', body: JSON.stringify({pass,passt,passr,passf,passe,mem,memt,memr,memf,meme,pn,tn,d,start,end,pco,es,descr,pt}), headers: { 'content-type': 'application/json' } })
       //else
       //window.alert("Inserted")
       fetch(`${process.env.REACT_APP_SERVER_PREFIX}/frstid/${mem}`,
       {method:'post',headers:{'content-type':'application/json'}})
       .then(res=>res.json())
       .then(data=>setfrstid(data))
    }

    // eslint-disable-next-line react/style-prop-object
    return(<div className='updateoverall'><div className='uptable'><center><table><br></br>
    <div className='upheading'>
    <thead>
        <tr >
            <h2> PROJECT ASSIGN </h2>
        </tr><br></br>
    </thead>
    </div>
    <tbody className='assignbody'>        

        {/* <h2><label className='name'>NAME</label></h2>
        <select value={mem} onChange={e=>setMem(e.target.value)}>
            <option value="" disablevalue>NAME</option>
            {name.map(val=><option>{val}</option>)}
        </select> */}
        <label className="nameemp">Name</label><br></br>
                <select className='selectemp'  value={mem} onChange={e => setMem(e.target.value)}>
                    <option  value="" disablevalue>TLNAME</option>
                    {name.map(val => <option>{val}</option>)}
                </select><br></br>
                <label className="nameemp">Name</label><br></br>
                <select className='selectemp'  value={memt} onChange={e => setMemt(e.target.value)}>
                    <option  value="" disablevalue>NAME</option>
                    {name.map(val => <option>{val}</option>)}
                </select><br></br>
                <label className="nameemp">Name</label><br></br>
                <select className='selectemp'  value={memr} onChange={e => setMemr(e.target.value)}>
                    <option  value="" disablevalue>NAME</option>
                    {name.map(val => <option>{val}</option>)}
                </select><br></br>
                <label className="nameemp">Name</label><br></br>
                <select className='selectemp'  value={memf} onChange={e => setMemf(e.target.value)}>
                    <option  value="" disablevalue>NAME</option>
                    {name.map(val => <option>{val}</option>)}
                </select><br></br>
                <label className="nameemp">Name</label><br></br>
                <select className='selectemp'  value={meme} onChange={e => setMeme(e.target.value)}>
                    <option  value="" disablevalue>NAME</option>
                    {name.map(val => <option>{val}</option>)}
                </select><br></br> 
          {/* <tr><td>UserId</td><input type="text" className="name" onChange={(e) => setPass(e.target.value)} placeholder='Empid' required></input></tr> */}
        {/* <tr><td>UserId</td><input type="text" className="name" onChange={(e) => setPass(e.target.value)} placeholder='Empid' required></input></tr>
        <tr><td>UserId</td><input type="text" className="name" onChange={(e) => setPasst(e.target.value)} placeholder='Empid' required></input></tr>
        <tr><td>UserId</td><input type="text" className="name" onChange={(e) => setPassr(e.target.value)} placeholder='Empid' required></input></tr>
        <tr><td>UserId</td><input type="text" className="name" onChange={(e) => setPassf(e.target.value)} placeholder='Empid' required></input></tr>
        <tr><td>UserId</td><input type="text" className="name" onChange={(e) => setPasse(e.target.value)} placeholder='Empid' required></input></tr> */}
        {/* <tr><td>UserName</td><input type="text" onChange={(e) => setInput(e.target.value)} placeholder='EmpName' required></input></tr> */}
        <tr><td>Project Name</td><input type="text" className="name" onChange={(e) => setPn(e.target.value)} placeholder='Platform' required></input></tr>
        <tr><td>Team Name</td><input type="text" className="name" onChange={(e) => setTn(e.target.value)} placeholder='Platform' required></input></tr>
        <tr><td>Duration</td><input type="number"className="name" onChange={(e) => setD(e.target.value)} placeholder='Platform' required></input></tr>
        <tr><td>Starting Date</td><input type="text" className="name" onChange={(e) => setStart(e.target.value)} placeholder='EmpDOB' required></input></tr>
        <tr><td>Ending Date</td><input type="text" className="name" onChange={(e) => setEnd(e.target.value)} placeholder='EmpDOB' required></input></tr>
        <tr><td>Project Status</td><h20> </h20>
                <select className='selectemp' value={pco} onChange={e => setPco(e.target.value)}>
                    <option value="" disablevalue>Status</option>
                    {spec.map(val => <option>{val}</option>)}
                </select><br></br></tr>

        {/* <tr><td>Contact</td><input type="number" onChange={(e) => setCon(e.target.value)} placeholder='EmpPhoneNo' required></input> </tr> */}
        <tr><td>Employee Status</td><input type="text" className='name' onChange={(e) => setEs(e.target.value)} placeholder='EmpLocation' required></input></tr>
        <tr><td>Description</td><input type="text" className='name' onChange={(e) => setDescr(e.target.value)} placeholder='EmpDateOfJoining' required></input></tr>

        {/* <tr><td>Experience</td><input type="number" onChange={(e) => setExp(e.target.value)} placeholder='EmpExperience' required></input></tr>
        <tr><td>Specialized1</td><input type="text" onChange={(e) => setSpeo(e.target.value)} placeholder='EmpTeamName' required></input></tr>
        <tr><td>Specialized2</td><input type="text" onChange={(e) => setSpet(e.target.value)} placeholder='EmpProjectTitle' required></input></tr>
        <tr><td>Specialized3</td><input type="text" onChange={(e) => setSper(e.target.value)} placeholder='EmpProjectStatus' required></input></tr> */}
        <tr><td>Platform</td><input type="text" className='name' onChange={(e) => setPt(e.target.value)} placeholder='Platform' required></input></tr>
        
        
        </tbody><tr><button className='upbtn' onClick={func}><span>Insert</span></button></tr>
       
       </table></center></div><div className='assigntaskimg'><img src='/images/assignimg.svg'></img></div></div>
)}