import React from 'react';
// import "./App.css";
import { Outlet } from "react-router-dom"
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Admin() {
    return (
        <div className="App">
                <Header />


                <div className="barline">
                    <Sidebar/>
                        <Outlet />
                    {/* </Sidebar> */}
                    <Footer />
                </div>
            

        </div>

    )
}
export default Admin;
