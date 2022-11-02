//importing the required packages
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './PersonelDetails.css'
//function to create contents of Personal details
export default function Employee() {
    const [item, setItems] = useState([]);
    const[display,setDisplay]=useState('none')
    const[displa,setDispla]=useState('none')
    const[displ,setDispl]=useState('none')
    const[dis,setDis]=useState('none')
    const[di,setDi]=useState('none')
    let token = localStorage.getItem('data');
    let username, id;
    const [Id, setId] = useState('');
    //fetch call to decode the token  
    useEffect(() => {
      fetch(`${process.env.REACT_APP_SERVER_PREFIX}/tokenDecode`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
        .then((res) => res.json())
        .then((data) => {
          setId(data.Empid);
        });
      //if decoded id exists   
    if(Id){
      //fetch call to display the basic details of the particular id 
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/employeedetail`,{method:"post",body:JSON.stringify({Id}),headers:{'content-type':"application/json"}})
    .then(res=>res.json())
    .then(data=>{
        setItems(data)
        //logic to dispay star rating value of the Employee
   let [a]=data;
   if(a.Rating==5){
     setDisplay("");
   }
   else if(a.Rating==4){
     setDispla("");
   }
   else if(a.Rating==3){
    setDispl("");
  }
  else if(a.Rating==2){
    setDis("");
  }
  else if(a.Rating==1){
    setDi("");
  }
    });
    console.log(id)
  }},[Id])
    //to display the details of the employee in table format
    return <div ><table border="7px" className="personaldetailstable"><thead>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DOB</th>
            <th>CONTACT NO</th>
            <th>LOCATION</th>
            <th>DATE OF JOINING</th>
            <th>EXPERIENCE</th>
            <th>SPECIALIZED AREA 1</th>
            <th>SPECIALIZED AREA 2</th>
            <th>SPECIALIZED AREA 3</th>
        </tr></thead>
        {item.map(({ Empid, Empname, DOB, Contact, location, DOJ, Experience, Specialized1, Specialized2, Specialized3 }) => (
            <tr>
                <td>{Empid}</td>
                <td>{Empname}</td>
                <td>{DOB}</td>
                <td>{Contact}</td>
                <td>{location}</td>
                <td>{DOJ}</td>
                <td>{Experience}</td>
                <td>{Specialized1}</td>
                <td>{Specialized2}</td>
                <td>{Specialized3}</td>
            </tr>
        ))}
    </table>
  {/* to display star rating */}
    <div className="Containerrate">
            <div className="skills">
                {/* <div className="rateh2"> */}
                <div className="rateurrate">
        <span class="G1">Y</span>
        <span class="e1">O</span>
        <span class="e2">U</span>
        <span class="k1">R</span>
        <span class="s1">⭐</span>
        <span class="f">R</span>
        <span class="o">A</span>
        <span class="r">T</span>
        <span class="G2">E</span>
        </div>
                {/* To display rating value in progress bar*/}
                <div className="progress-bar">
                {item.map(({ Rating})=>(
                    <div className="raterating"><span>{Rating}</span>
                    <div className="fivestar">
                    <label  className="five1" style={{display:display}}>⭐</label>
                    <label  className="five2" style={{display:display}}>⭐</label>
                    <label  className="five3" style={{display:display}}>⭐</label>
                    <label  className="five4" style={{display:display}}>⭐</label>
                    <label  className="five5" style={{display:display}}>⭐</label>
                    </div>
                   <div className="fourstar">
                    <label  className="four1" style={{display:displa}}>⭐</label>
                    <label  className="four2" style={{display:displa}}>⭐</label>
                    <label  className="four3" style={{display:displa}}>⭐</label>
                    <label  className="four4" style={{display:displa}}>⭐</label>
                    </div>
                    <div className="threestar">
                    <label  className="three" style={{display:displ}}>⭐</label>
                    <label  className="three1" style={{display:displ}}>⭐</label>
                    <label  className="three2" style={{display:displ}}>⭐</label>
                    </div>
                    <div className="twostar">
                    <label  className="two1" style={{display:dis}}>⭐</label>
                    <label  className="two2" style={{display:dis}}>⭐</label>
                    </div >
                    <div className="onestar">
                    <label  className="one1" style={{display:di}}>⭐</label>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
}
