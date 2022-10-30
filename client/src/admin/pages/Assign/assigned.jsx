
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
    const [data,setData]=useState([]);
    const [fid,setFid]=useState("")
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/assignname`).then(res => res.json()).then(data => setName(data));
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/assignspecial`).then(res => res.json()).then(data => setSpec(data));
    },[])

     function func()
     {
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/test`,
        { method: 'put', body: JSON.stringify({mem,memt,memr,meme,memf,pn,tn,d,start,end,pco,es,descr,pt}), 
        headers: { 'content-type': 'application/json' } })

        alert("assigned")
        setMem(" ");
        setMemt(" ");
        setMemr(" ");
        setMemf(" ");
        setMeme(" ");
        setPn(" ");
        setD(" ");
        setStart(" ");
        setDescr(" ");
        setPt(" ");
        setEnd(" ");
     }
    return(<div className='updateoverall'><div className='uptable'> <center><table><br></br>
    <div className='upheading'>
    <thead>
        <tr >
            <h2>PROJECT ASSIGNING</h2>
        </tr><br></br>
    </thead>
    </div>
    <tbody>        
       <div className='assignclassselect'>
                <select value={mem} onChange={e => setMem(e.target.value)}>
                    <option value="" disablevalue>Choose a Team Leader</option>
                    {name.map(val => <option>{val}</option>)}
                </select><br></br><br></br>
              
                <select value={memt} onChange={e => setMemt(e.target.value)}>
                    <option value="" disablevalue>Choose a Member</option>
                    {name.map(val => <option>{val}</option>)}
                </select><br></br><br></br>
               
                <select value={memr} onChange={e => setMemr(e.target.value)}>
                    <option value="" disablevalue>Choose a Member</option>
                    {name.map(val => <option>{val}</option>)}
                </select><br></br><br></br>
                
                <select value={memf} onChange={e => setMemf(e.target.value)}>
                    <option value="" disablevalue>Choose a Member</option>
                    {name.map(val => <option>{val}</option>)}
                </select><br></br><br></br>
              
                <select value={meme} onChange={e => setMeme(e.target.value)}>
                    <option value="" disablevalue>Choose a Member</option>
                    {name.map(val => <option>{val}</option>)}

        <tr><td>Project Name</td><input type="text" className="name" onChange={(e) => setPn(e.target.value)} required></input></tr><br></br>
        <tr><td>Team Name</td><input type="text" className="name" onChange={(e) => setTn(e.target.value)} required></input></tr><br></br>
        <tr><td>Duration</td><input type="number"className="name" onChange={(e) => setD(e.target.value)} required></input></tr><br></br>
        <tr><td>Starting Date</td><input type="text" className="name" onChange={(e) => setStart(e.target.value)} required></input></tr><br></br>
        <tr><td>Ending Date</td><input type="text" className="name" onChange={(e) => setEnd(e.target.value)} required></input></tr><br></br>
        <tr><td>Description</td><input type="text" className="name" onChange={(e) => setDescr(e.target.value)}  required></input></tr><br></br>
        <tr><td>Platform</td><input type="text" className="name" onChange={(e) => setPt(e.target.value)}  required></input></tr><br></br>
        
        
        </tbody><button className='upbtn' onClick={func}><span>Insert</span></button>
       
       </table></center></div><div className='assigntaskimg'><img src='/images/assignimg.svg'></img></div></div>
)}