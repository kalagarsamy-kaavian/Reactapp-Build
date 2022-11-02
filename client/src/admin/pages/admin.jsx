import React from 'react';
// import "./App.css";
import { Outlet } from "react-router-dom"
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Admin() {
    const navigate = useNavigate();
    const [role, setRole] = useState([]);
    const [id, setId] = useState('');
    let token = localStorage.getItem('data');

     console.log(token,'token');
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/tokenDecode`, { method: 'POST', body: JSON.stringify({ token }), headers: { 'content-type': 'application/json' } })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setId(data);
            });
            // console.log(id);
    }, [role])
    // console.log(role);
   console.log(id.role)
    if (id.role !== 'Admin') {
        return navigate('/Accesdenied')
    }
    return (
        <div className="App">
            <Header />


            <div className="barline">
                <Sidebar />
                <Outlet />
                {/* </Sidebar> */}
                <Footer />
            </div>


        </div>
       

    )
 }
export default Admin
