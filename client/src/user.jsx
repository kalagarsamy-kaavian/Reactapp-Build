import React from 'react';
import "./App.css";
import{Outlet}from "react-router-dom"
import Sidebar from './user/components/Sidebar';
import Header from './user/components/Header';
import Footer from './user/components/Footer';

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
