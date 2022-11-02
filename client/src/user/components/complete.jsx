// import React from 'react'
// // import {BiLogOut} from "react-icons/bi";
// // import Button from "@mui/material/Button";


// export const LogOut = (props) => {
//   return (
//     <form action='/LogOut' method='get'>
//         <label htmlFor="Header-logout">
//                 <span className="b"></span>
//             </label>

//     <button className='pushable' color="inherit" type='submit'><span className='front'><h9 className="btn2">LogOut</h9></span></button>

//     </form>
//   )
// }


// export default LogOut;
import React from 'react'
import {useState, useEffect } from 'react';

export default function Complete(){

  const id = localStorage.getItem('data');
  const [olist,setOlist]=useState('');
  const [team,setTeam]=useState('');
  const token = localStorage.getItem('data');
  const [tokendata, setTokendata] = useState('');
   
   
  useEffect(() => {
    //console.log(id)
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/tokenDecode`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setTokendata(data);
        
      });

  }, [])
  
  if (tokendata) {
    console.log(tokendata)
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/olist/${tokendata.Empid}`, { method: "post", headers: { 'content-type': 'apllication/json' } })
      .then(res => res.json())
      .then(data => setOlist(data))
      
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/leaderteam/${tokendata.Empid}`, { method: "post", headers: { 'content-type': 'apllication/json' } })
      .then(res => res.json())
      .then(data => setTeam(data))
      
  }


  function complete(){
   console.log(olist,"olist")
   console.log(team,"team")
    //let [first]=olist;
   // console.log(first.Teamname)
    if(olist==="Team Leader")
    {
      fetch(`${process.env.REACT_APP_SERVER_PREFIX}/remcomplete/${team}`, { method: "put",headers: { 'Content-type': 'application/json' } })
       alert('Updated successfully !')
      }else{
        window.alert("There is no access")
    }
   }
  

  return(
    <button className='lpushable' color="inherit" onClick={complete} ><span className='lfront' >Completed</span></button>
  
    )
}