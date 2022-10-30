// import React, { useEffect } from 'react';
// import { useState } from 'react';
// // import './empinsert.css'
// //import "./UpdateEmployee.css"
// import { Link } from 'react-router-dom';

// export default function Emplist() {
//     const [name,setName]=useState([]);
//     const [mem,setMem]=useState('');
//     const [memt,setMemt]=useState('');
//     const [memr,setMemr]=useState('');
//     const [memf,setMemf]=useState('');
//     const [meme,setMeme]=useState('');
//     const [pco,setPco]=useState('')
//     const [pass, setPass] = useState('');
//     const [passt, setPasst] = useState('')
//     const [passr, setPassr] = useState('')
//     const [passf, setPassf] = useState('')
//     const [passe, setPasse] = useState('')

//     //const [input, setInput] = useState("")
//     // const [dob, setDob] = useState("");
//     // const [con, setCon] = useState(0);
//     // const [loc, setLoc] = useState("");
//     // const [doj, setDoj] = useState("");
//     // const [exp, setExp] = useState(0);
//     // const [speo, setSpeo] = useState("");
//     // const [spet, setSpet] = useState("");
//     const [tn, setTn] = useState("");
//     const [ps, setPs] = useState("");
//     const [pn, setPn] = useState("");
//     const [pt, setPt] = useState("");
//     const [es,setEs]=useState("");
//     const [d,setD]=useState('');
//     const [start,setStart]=useState("");
//     const [end,setEnd]=useState("");
//     const [descr,setDescr]=useState("");
//     const [spec,setSpec]=useState([]);
//     useEffect(()=>{
//         fetch(`${process.env.REACT_APP_SERVER_PREFIX}/assignname').then(res => res.json()).then(data => setName(data));
//         fetch(`${process.env.REACT_APP_SERVER_PREFIX}/assignspecial').then(res => res.json()).then(data => setSpec(data));

      
        


//     },[])
//     function func() {
//         fetch(`http://localhost:3002/pass`,{method:"post",body:JSON.stringify({mem,memt,memr,memf,meme}),headers:{'content-type':'application/json'}})
//     .then(res => res.json()).then((data) => {
//         console.log(data);
//         setPass(data);
//     });
//     //    fetch(`http://localhost:3002/passt`,{method:"post",body:JSON.stringify({memt}),headers:{'content-type':'application/json'}})
//     //    .then(res => res.json()).then(data => setPasst(data));
//     //    fetch(`http://localhost:3002/passr`,{method:"post",body:JSON.stringify({memr}),headers:{'content-type':'application/json'}})
//     //    .then(res => res.json()).then(data => setPassr(data));
//     //    fetch(`http://localhost:3002/passf`,{method:"post",body:JSON.stringify({memf}),headers:{'content-type':'application/json'}})
//     //    .then(res => res.json()).then(data => setPassf(data));
//     //    fetch(`http://localhost:3002/passe`,{method:"post",body:JSON.stringify({meme}),headers:{'content-type':'application/json'}})
//     //    .then(res => res.json()).then(data => setPasse(data));
//     //    console.log(pass,passe,passt,passf,passr)
//     //     //if(mem && memt && memr && memf && meme && pn && tn && d && start && end && pco && es && descr && pt)
//     //     fetch(`http://localhost:3002/assignemprecord`, { method: 'post', 
//     //     body: JSON.stringify({pass,passt,passr,passf,passe,mem,memt,memr,memf,meme,pn,tn,d,start,end,pco,es,descr,pt}),
//     //      headers: { 'content-type': 'application/json' } }).then(() => console.log('success'));
//        //else
//        //window.alert("Inserted")
      
      
//     }
  
// //     let [first]=pass;
// //   console.log(first.Empid)

//     // eslint-disable-next-line react/style-prop-object
//     return(<div className='updateoverall'><div className='uptable'> <center><table><br></br>
//     <div className='upheading'>
//     <thead>
//         <tr >
//             <h2>  Employee Form </h2>
//         </tr><br></br>
//     </thead>
//     </div>
//     <tbody>        
//         {/* <h2><label className='name'>NAME</label></h2>
//         <select value={mem} onChange={e=>setMem(e.target.value)}>
//             <option value="" disablevalue>NAME</option>
//             {name.map(val=><option>{val}</option>)}
//         </select> */}
//         <label className="name">Name</label><h20> </h20>
//                 <select value={mem} onChange={e => setMem(e.target.value)}>
//                     <option value="" disablevalue>TLNAME</option>
//                     {name.map(val => <option>{val}</option>)}
//                 </select><br></br>
//                 <label className="name">Name</label><h20> </h20>
//                 <select value={memt} onChange={e => setMemt(e.target.value)}>
//                     <option value="" disablevalue>NAME</option>
//                     {name.map(val => <option>{val}</option>)}
//                 </select><br></br>
//                 <label className="name">Name</label><h20> </h20>
//                 <select value={memr} onChange={e => setMemr(e.target.value)}>
//                     <option value="" disablevalue>NAME</option>
//                     {name.map(val => <option>{val}</option>)}
//                 </select><br></br>
//                 <label className="name">Name</label><h20> </h20>
//                 <select value={memf} onChange={e => setMemf(e.target.value)}>
//                     <option value="" disablevalue>NAME</option>
//                     {name.map(val => <option>{val}</option>)}
//                 </select><br></br>
//                 <label className="name">Name</label><h20> </h20>
//                 <select value={meme} onChange={e => setMeme(e.target.value)}>
//                     <option value="" disablevalue>NAME</option>
//                     {name.map(val => <option>{val}</option>)}
//                 </select><br></br>

//         {/* <tr><td>UserId</td><input type="text" onChange={(e) => setPass(e.target.value)} placeholder='Empid' required></input></tr>
//         <tr><td>UserId</td><input type="text" onChange={(e) => setPasst(e.target.value)} placeholder='Empid' required></input></tr>
//         <tr><td>UserId</td><input type="text" onChange={(e) => setPassr(e.target.value)} placeholder='Empid' required></input></tr>
//         <tr><td>UserId</td><input type="text" onChange={(e) => setPassf(e.target.value)} placeholder='Empid' required></input></tr>
//         <tr><td>UserId</td><input type="text" onChange={(e) => setPasse(e.target.value)} placeholder='Empid' required></input></tr> */}
//         {/* <tr><td>UserName</td><input type="text" onChange={(e) => setInput(e.target.value)} placeholder='EmpName' required></input></tr> */}
//         <tr><td>Project Name</td><input type="text" onChange={(e) => setPn(e.target.value)} placeholder='Platform' required></input></tr>
//         <tr><td>Team Name</td><input type="text" onChange={(e) => setTn(e.target.value)} placeholder='Platform' required></input></tr>
//         <tr><td>Duration</td><input type="number" onChange={(e) => setD(e.target.value)} placeholder='Platform' required></input></tr>
//         <tr><td>Starting Date</td><input type="text" onChange={(e) => setStart(e.target.value)} placeholder='EmpDOB' required></input></tr>
//         <tr><td>Ending Date</td><input type="text" onChange={(e) => setEnd(e.target.value)} placeholder='EmpDOB' required></input></tr>
//         <tr><td>Project Status</td><label className="name">Name</label><h20> </h20>
//                 <select value={pco} onChange={e => setPco(e.target.value)}>
//                     <option value="" disablevalue>Status</option>
//                     {spec.map(val => <option>{val}</option>)}
//                 </select><br></br></tr>
       
//         {/* <tr><td>Employee Status</td><input type="text" onChange={(e) => setEs(e.target.value)} placeholder='EmpLocation' required></input></tr> */}
//         <tr><td>Description</td><input type="text" onChange={(e) => setDescr(e.target.value)} placeholder='EmpDateOfJoining' required></input></tr>

       
//         <tr><td>Platform</td><input type="text" onChange={(e) => setPt(e.target.value)} placeholder='Platform' required></input></tr>
        
        
//         </tbody><tr><button className='upbtn' onClick={func}><span>Insert</span></button></tr>
 
       
//     </table></center></div></div>
// )}
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
    const [pass, setPass] = useState("")
    const [passt, setPasst] = useState("")
    const [passr, setPassr] = useState("")
    const [passf, setPassf] = useState("")
    const [passe, setPasse] = useState("")

    //const [input, setInput] = useState("")
    // const [dob, setDob] = useState("");
    // const [con, setCon] = useState(0);
    // const [loc, setLoc] = useState("");
    // const [doj, setDoj] = useState("");
    // const [exp, setExp] = useState(0);
    // const [speo, setSpeo] = useState("");
    // const [spet, setSpet] = useState("");
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

    function func() {
        //if(mem && memt && memr && memf && meme && pn && tn && d && start && end && pco && es && descr && pt)
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/assignemprecord`, { method: 'post', body: JSON.stringify({pass,passt,passr,passf,passe,mem,memt,memr,memf,meme,pn,tn,d,start,end,pco,es,descr,pt}), headers: { 'content-type': 'application/json' } })
       //else
       //window.alert("Inserted")
    }

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

            <h2> PROJECT ASSIGN </h2>

            <h2>PROJECT ASSIGNING</h2>
        </tr><br></br>
    </thead>
    </div>
    <tbody>        

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

        <tr><td>UserId</td><input type="text" className="name" onChange={(e) => setPass(e.target.value)} placeholder='Empid' required></input></tr>
        <tr><td>UserId</td><input type="text" className="name" onChange={(e) => setPasst(e.target.value)} placeholder='Empid' required></input></tr>
        <tr><td>UserId</td><input type="text" className="name" onChange={(e) => setPassr(e.target.value)} placeholder='Empid' required></input></tr>
        <tr><td>UserId</td><input type="text" className="name" onChange={(e) => setPassf(e.target.value)} placeholder='Empid' required></input></tr>
        <tr><td>UserId</td><input type="text" className="name" onChange={(e) => setPasse(e.target.value)} placeholder='Empid' required></input></tr>
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
 {/* <tr><td>EmpSpecialized1</td><input type="text" onChange={(e)=>setEso(e.target.value)} placeholder='EmpSpecialized1' required></input></tr>
        <tr><td>EmpSpecialized2</td><input type="text" onChange={(e)=>setEst(e.target.value)} placeholder='EmpSpecialized2' required></input></tr>
        <tr><td>EmpSpecialized3</td><input type="text" onChange={(e)=>setEsr(e.target.value)} placeholder='EmpSpecialized3' required></input> </tr>
        <tr><td>EmpRole</td><input type="text" onChange={(e)=>setEr(e.target.value)} placeholder='EmpRole' required></input></tr>
        */}

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