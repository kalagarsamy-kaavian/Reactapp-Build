import React, { useEffect } from 'react';
import './dashboard.css'
import { useState } from 'react';

export default function Empcomplete() {

    const [counts, setCount] = useState(0)
    const [numbers, setNum] = useState(0);
    const [team, setTeam] = useState(0);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/tlcomplete`).then(res => res.json()).then(data => setCount(data));
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/tlongoing`).then(res => res.json()).then(data => setNum(data));
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/tlcount`).then(res => res.json()).then(data => setTeam(data));
    })
    // return (<><div className='completecount' ><h2>COMPLETED     {counts}</h2></div><div className='ongoingcount'><h2>ONGOING       {numbers}</h2></div><div className='tlcount'><h2>Team       {team}</h2></div></>
    // )

    return (<body>
        {/* <tr className='head'>
            {/* <th colSpan="2">DETAILS</th> 

        </tr> */}
        <div className='countshsad'>
            <div class="teamshsad">
                <td>TEAMS<br></br><br></br>
                    {team}</td>
            </div>
            <div class="completehsad">
                <td>COMPLETED<br></br><br></br>
                    {counts}</td>
            </div>
            <div class="ongoinghsad">
                <td>ONGOING<br></br><br></br>
                    {numbers}</td>
            </div>
         </div>
         </body>)
}