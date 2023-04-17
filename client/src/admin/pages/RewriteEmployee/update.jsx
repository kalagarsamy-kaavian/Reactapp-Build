import React from "react";
import { useEffect, useState } from "react";
import "./RewriteEmployee.css";

export default function Updateemp() {
        const [emp,setEmp] = useState([]);
        const [Empid,setEmpid] = useState('');
        const [details,setDetails]=useState([]);
        //Variables that contains the newly changed values from the input box
        const [Empname,setName] = useState(''); 
        const [Dob,setDob]=useState('');
        const [Phone,setPhone]=useState('');
        const [Location,setLocation]=useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empaddid`).then(res => res.json()).then(data => setEmp(data));
  }, [emp]);

  const search = (e) => {
    // e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empaddsearch`, {
      method: 'POST',
      body: JSON.stringify({ Empid }),
      headers: { 'content-type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        setDetails(data);
        setName(data.Empname);  //prefill the text box with the already existing value from the db
        setDob(data.DOB);
        setPhone(data.Contact);
        setLocation(data.location)
          console.log('Name',data.Empname);
          console.log('Data',data);
        console.log('details',details);
      })
  }

  const upemp = (e) => {
    
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/empaddupdate`, {
      method: 'PUT',
      body: JSON.stringify({ Empid,Empname,Dob,Phone,Location }),
      headers: { 'content-type': 'application/json' }
    }).then(res => res.json()).then(console.log(details));
    setName('');
    setDob('');
    setPhone('')
    setLocation('')
    alert('Updated Successfully.')
  }

  return (
    <body id=''>
      <center>
        <div>
          <h2 id='aupdate'>UPDATE THE EMPLOYEE</h2>
          <br></br>
          <select value={Empid} onChange={e => setEmpid(e.target.value)}>
                 <option>EMPLOYEE ID </option>
                 {emp.map(Empid=> <option>{Empid}</option>)}
             </select>
          <button onClick={search}>🔍</button>
        </div>
        <br></br> 
      
        <form className="updateform">
          <br></br>
          <span className="t1"><h3>Name</h3></span>
          <input  type='text' value={Empname} onChange={(e) => setName(e.target.value)} /><br></br>
          <span className="t2"><h3>DOB</h3></span>
          <input  type='text' value={Dob} onChange={(e) => setDob(e.target.value)} /><br></br>
          <span className="t3"><h3>Contact</h3></span>
          <input  type='text' value={Phone} onChange={(e) => setPhone(e.target.value)} /><br></br>
          <span className="t4"><h3>Location</h3></span>
          <input  type='text' value={Location} onChange={(e) => setLocation(e.target.value)} /><br></br>
          </form>

          <br></br>
          <div className="updateimg"><img src="/images/updateimg.svg"></img></div>
          <span><button className="updateformbtn" id='update' onClick={upemp}>UPDATE</button></span>      
      </center>
    </body>
  )
}