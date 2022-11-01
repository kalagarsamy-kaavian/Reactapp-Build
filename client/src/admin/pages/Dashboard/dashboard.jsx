import React, { useEffect } from 'react';
import './dashboard.css'
import { useState } from 'react';

export default function Empcomplete() {

    const [counts, setCount] = useState(0)
    const [numbers, setNum] = useState(0);
//     const [list,setList]=useState(0);
    const [team, setTeam] = useState(0);
    /**
     * the useEffect that fetch the API call from the backend and display that to the UI.
     * These are the contents that need to visible to the user or client
     */
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/tlcomplete`).then(res => res.json()).then(data => setCount(data));
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/tlongoing`).then(res => res.json()).then(data => setNum(data));
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/tlcount`).then(res => res.json()).then(data => setTeam(data));
    })
    

    return (<body>
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
