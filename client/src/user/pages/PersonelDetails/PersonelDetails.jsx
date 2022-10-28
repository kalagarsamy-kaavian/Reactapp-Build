import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Update from "./update";

import './PersonelDetails.css'
export default function Employee() {
    const [item, setItems] = useState([]);
    const [logout, setLogout] = useState(false);

    const id = localStorage.getItem('data');
    const navigate = useNavigate();
    useEffect(()=>{
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/employeedetail`,{method:"post",body:JSON.stringify({id}),headers:{'content-type':"application/json"}})
    .then(res=>res.json())
    .then(data=>setItems(data));
    console.log(id)
},[id])
    //      if(!localStorage.getItem('data')){
    //     navigate('/');
    //        }

    useEffect(() => {

    }, [logout])

    const logoutPage = () => {
        // e.preventDefault();
        localStorage.removeItem('data');
        setLogout(true);
    }

    return <div ><table border="5px"><thead>
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
        <div className="Link">
            {/* <Link to={"/history"}>VIEW HISTORY</Link> */}
        </div>
        {/* <button onClick={logoutPage}>LOGOUT</button> */}
        {/* <Link to={"/update"}>Update Project Status</Link> */}
    </div>
}
