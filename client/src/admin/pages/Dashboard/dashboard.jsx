import React, { useEffect } from 'react';
import './board.css'
import { useState } from 'react';

export default function Empcomplete() {
    const [counts,setCount]=useState(0)
    const [numbers,setNum]=useState(0);
    const [team,setTeam]=useState(0);
    useEffect(()=>{
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/tlcomplete`).then(res=>res.json()).then(data=>setCount(data));
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/tlongoing`).then(res=>res.json()).then(data=>setNum(data));
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/tlcount`).then(res=>res.json()).then(data=>setTeam(data));
})
    // return (<><div className='completecount' ><h2>COMPLETED     {counts}</h2></div><div className='ongoingcount'><h2>ONGOING       {numbers}</h2></div><div className='tlcount'><h2>Team       {team}</h2></div></>
    // )

    return (<div className='dash' border="2">
        <tr className='head'>
            <th colSpan="2">DETAILS</th>
        </tr>

        <div className='dashteam'>
            <td>TEAMS</td><br></br>
            <td>{team}</td>
        </div>
        <div className='completed'>
            <td>COMPLETED</td><br></br>
            <td>{counts}</td>
        </div>
        <div className='ongoing'>
            <td>ONGOING</td><br></br>
            <td>{numbers}</td>
        </div>
    </div>)
}