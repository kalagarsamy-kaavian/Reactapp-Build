import React from 'react';
import "./App.css";
import{Outlet}from "react-router-dom"
import Sidebar from './admin/components/Sidebar';
import Header from './admin/components/Header';
import Footer from './admin/components/Footer';
function App(){
    return(
        <div className="App">
            <Header/>
            
            <div className="barline">
                <Sidebar>
                    <Outlet/>
                    </Sidebar>
                    <Footer/>

            </div>
            
        </div>
        
    )
}
export default App;
