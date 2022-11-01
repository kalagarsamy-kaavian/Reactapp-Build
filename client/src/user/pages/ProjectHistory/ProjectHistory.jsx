import React, { useState, useEffect } from 'react';
import "./ProjectHistory.css";
// import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import './todo.css'
export default function History() {
    const navigate = useNavigate();
    // const id = localStorage.getItem('data');
    let token = localStorage.getItem('data');
    let username, id;
    const [item, setItems] = useState([]);
    const [Id, setId] = useState('');
    const [logout, setLogout] = useState(false);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/tokenDecode`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
          .then((res) => res.json())
          .then((data) => {
            setId(data.Empid);
          });
    // useEffect(() => {
        if (Id) {
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/employeehistory`, { method: "post", body: JSON.stringify({ Id}), headers: { 'content-type': 'application/json' } })
            .then(res => res.json())
            .then(data => {setItems(data);
                console.log(item);
                console.log(data);         
            });
       
        }},[Id])

    //     if (!localStorage.getItem('data'))
    //         navigate('/');
    // }, [id]);

    // useEffect(() => {
    // }, [logout])

    // const logoutPage = () => {
    //     // e.preventDefault();
    //     localStorage.removeItem('data');
    //     setLogout(true);
    // }
    // return <div className='historyoverall'>
        {/* <div className='histroytable'> */}
            return <div className='ph'><table  border={1} class="center"> 
                <thead>
                <tr>
                {/* <div className='tableheading'> */}
                    <th>PROJECT TITLE</th>
                    <th>TEAM NAME</th>
                    <th>PROJECT DURATION(in months)</th>
                    <th>PROJECT STARETED ON</th>
                    <th>PROJECT COMPLETED ON</th>
                    <th>PROJECT STATUS</th>
                    {/* </div> */}
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
            {/* <button onClick={logoutPage}>LOGOUT</button> */}
        {/* </div> */}
    </div>
}