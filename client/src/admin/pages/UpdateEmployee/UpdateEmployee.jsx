import React from 'react';
import { useState } from 'react';
// import './empinsert.css'
import "./UpdateEmployee.css"
import { Link } from 'react-router-dom';

export default function Emplist() {
    const [pass, setPass] = useState("")
    const [input, setInput] = useState("")
    const [dob, setDob] = useState("");
    const [con, setCon] = useState(0);
    const [loc, setLoc] = useState("");
    const [doj, setDoj] = useState("");
    const [exp, setExp] = useState(0);
    const [speo, setSpeo] = useState("");
    const [spet, setSpet] = useState("");
    const [sper, setSper] = useState("");
    const [password, setPassword] = useState("");
    const [pt, setPt] = useState("");
    const [role, setRole] = useState("");
    // const [eso,setEso]=useState("");
    // const [est,setEst]=useState("");
    // const [esr,setEsr]=useState("");
    // const [er,setEr]=useState("");
    function func() {
        if(pass&& input&&dob&& con&& loc&& doj&& exp&& speo&& spet&& sper&& pt)
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/emprecord`, { method: 'post', body: JSON.stringify({ pass, input, dob, con, loc, doj, exp, speo, spet, sper, pt, password }), headers: { 'content-type': 'application/json' } })
       else
       window.alert("Inserted")
    }

    // eslint-disable-next-line react/style-prop-object
    return(<div className='updateoverall'><div className='uptable'> <center><table className='addemptable'><br></br>
    <div className='upheading'>
    <thead>
        <tr >
            <h2>  ADD EMPLOYEE</h2>
        </tr><br></br>
    </thead>
    </div>
    <tbody>        
        <tr><td>UserId</td><input type="text" onChange={(e) => setPass(e.target.value)} placeholder='Empid' required></input></tr>
        <tr><td>Password</td><input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" required></input></tr>
        <tr><td>UserName</td><input type="text" onChange={(e) => setInput(e.target.value)} placeholder='EmpName' required></input></tr>
        <tr><td>DOB</td><input type="date"  onChange={(e) => setDob(e.target.value)} placeholder='EmpDOB' required></input></tr>
        <tr><td>Contact</td><input type="number" maxLength="10" onChange={(e) => setCon(e.target.value)} placeholder='EmpPhoneNo' required></input> </tr>
        <tr><td>Location</td><input type="text" onChange={(e) => setLoc(e.target.value)} placeholder='EmpLocation' required></input></tr>
        <tr><td>DOJ</td><input type="date" onChange={(e) => setDoj(e.target.value)} placeholder='EmpDateOfJoining' required></input></tr>
        <tr><td>Experience</td><input type="number" onChange={(e) => setExp(e.target.value)} placeholder='EmpExperience' required></input></tr>
        <tr><td>Specialized1</td><input type="text" onChange={(e) => setSpeo(e.target.value)} placeholder='EmpTeamName' required></input></tr>
        <tr><td>Specialized2</td><input type="text" onChange={(e) => setSpet(e.target.value)} placeholder='EmpProjectTitle' required></input></tr>
        <tr><td>Specialized3</td><input type="text" onChange={(e) => setSper(e.target.value)} placeholder='EmpProjectStatus' required></input></tr>
        <tr><td>Platform</td><input type="text" onChange={(e) => setPt(e.target.value)} placeholder='Platform' required></input></tr>
        <tr><td>Role</td><input type="text" onChange={(e) => setRole(e.target.value)} placeholder='Role' required></input></tr>
        </tbody><tr><button className='upbtn' onClick={func}><span>Insert</span></button></tr>
 {/* <tr><td>EmpSpecialized1</td><input type="text" onChange={(e)=>setEso(e.target.value)} placeholder='EmpSpecialized1' required></input></tr>
        <tr><td>EmpSpecialized2</td><input type="text" onChange={(e)=>setEst(e.target.value)} placeholder='EmpSpecialized2' required></input></tr>
        <tr><td>EmpSpecialized3</td><input type="text" onChange={(e)=>setEsr(e.target.value)} placeholder='EmpSpecialized3' required></input> </tr>
        <tr><td>EmpRole</td><input type="text" onChange={(e)=>setEr(e.target.value)} placeholder='EmpRole' required></input></tr>
        */}
       
    </table></center></div><div className='addempimg'><img src='/images/addemp.svg'></img></div></div>
)}