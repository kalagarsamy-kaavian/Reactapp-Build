import React from 'react';
import { Outlet } from "react-router-dom"
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
function User() {
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
           
    }, [role])
    
   console.log(id.role)
    if (id.role !== 'User') {
        return navigate('/Accesdenied')
    }
    return (
        <div className="App">
            <Header />
            <div className="barline">
                <Sidebar />
                <Outlet />
                <Footer />
            </div>
        </div>
    )
 }
export default User
