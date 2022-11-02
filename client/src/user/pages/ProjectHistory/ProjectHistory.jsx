//importing the required packages
import React, { useState, useEffect } from 'react';
import "./ProjectHistory.css";
//function to create contents of the project history page
export default function History() {
    //declaring required variables
    let token = localStorage.getItem('data');
    const [item, setItems] = useState([]);
    const [Id, setId] = useState('');
    //fetch call to decode the token 
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/tokenDecode`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
          .then((res) => res.json())
          .then((data) => {
            setId(data.Empid);
          });
          //if decoded id exists 
        if (Id) {
            //fetch call to display the project history of the logged in employee
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/employeehistory`, { method: "post", body: JSON.stringify({ Id}), headers: { 'content-type': 'application/json' } })
            .then(res => res.json())
            .then(data => {setItems(data);
                console.log(item);
                console.log(data);         
            });
        }},[Id])
        {/* displaying the project details in table view */}
            return <div className='ph'><table  border={1} class="center"> 
                <thead>
                <tr>
                    <th>PROJECT TITLE</th>
                    <th>TEAM NAME</th>
                    <th>PROJECT DURATION(in months)</th>
                    <th>PROJECT STARETED ON</th>
                    <th>PROJECT COMPLETED ON</th>
                    <th>PROJECT STATUS</th>  
                </tr>
                </thead>
                {item.map(({ Projectname, Teamname, Duration, Startingdate, Endingdate, Projectstatus }) => (
                   <tr>
                        <td>{Projectname}</td>
                        <td>{Teamname}</td>
                        <td>{Duration}</td>
                        <td>{Startingdate}</td>
                        <td>{Endingdate}</td>
                        <td>{Projectstatus}</td>
                    </tr> 
                ))}
            </table>
    </div>
}