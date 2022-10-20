import React from 'react';
import './App.css'
import Sidebar from './admin/components/Sidebar';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import ProjectStatus from './admin/pages/ProjectStatus/ProjectStatus';
import Home from './admin/pages/Home/Home';
import UpdateEmployee from './admin/UpdateEmployee/UpdateEmployee';
import RemoveEmployee from './admin/RemoveEmployee/RemoveEmployee';
import Completed from './admin/pages/ProjectStatus/Completed';
import OnProcess from './admin/pages/ProjectStatus/OnProcess';
import Header from './admin/components/Header';
import Footer from './admin/components/Footer';
import LogOut from './admin/pages/LogOut';
import About from './admin/pages/About/About';
import Userlogin from './login/userlogin';
import Admin from './admin';

import User from './user';
import Homepa from './user/pages/Home/Home';
import History from './user/pages/ProjectHistory/ProjectHistory';
import Employee from './user/pages/PersonelDetails/PersonelDetails';
import Update from './user/pages/PersonelDetails/update';

function UserSessionRoute({ element: Component, ...rest }) {
  const doesUserHaveSession = localStorage.getItem('data');
  return (
    doesUserHaveSession ? (<Component {...rest} />) : (<Navigate to="/login" />)
  );
}

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        
        <BrowserRouter>
         
          <Routes>
          <Route path='/user' element={<UserSessionRoute element={User} />}></Route>
           <Route path='/Home' element={<Homepa />}></Route>
            <Route path='/ProjectHistory' element={<History />}></Route>
            <Route path='/PersonelDetails' element={<Employee/>}></Route>
            <Route path='/update'element={<Update/>}></Route>
            <Route path='/user/About' element={<About/>}></Route>
            <Route path='/user/LogOut' element={<LogOut/>}></Route>

            {/* admin sidebar */}
            <Route path='/' element={<Userlogin />}></Route>
            <Route path='/admin' element={<UserSessionRoute element={Admin} />}></Route>
            <Route path='/admin/Home' element={<Home />}></Route>
            <Route path='/admin/ProjectStatus' element={<ProjectStatus />}></Route>
            <Route path='/admin/ProjectStatus/Completed' element={<Completed />}></Route>
            <Route path='/admin/ProjectStatus/OnProcess' element={<OnProcess />}></Route>
            <Route path='/admin/UpdateEmployee' element={<UpdateEmployee />}></Route>
            <Route path='/admin/RemoveEmployee' element={<RemoveEmployee />}></Route>
            <Route path='/admin/About' element={<About/>}></Route>
            <Route path='/admin/LogOut' element={<LogOut />}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </div>
  )
}

export default App;