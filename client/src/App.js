import React from 'react';
//import './App.css'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import ProjectStatus from './admin/pages/ProjectStatus/ProjectStatus';
import Home from './admin/pages/Home/Home';

//import Emplist from './admin/pages/UpdateEmployee/UpdateEmployee';
import Emplist from './admin/pages/UpdateEmployee/UpdateEmployee';
import RateEmp from './admin/pages/Rating/Rating';
// import RemoveEmployee from './admin/RemoveEmployee/RemoveEmployee';
// import OnProcess from './admin/pages/ProjectStatus/OnProcess';
import Footer from './admin/components/Footer';
import About from './admin/pages/About/About';
import Userlogin from './login/userlogin';
import Admin from './admin/pages/admin';
import LogOutbtn from './admin/components/LogOutbtn';
import LogOut from './user/components/LogOutbtn';
import Projectstatus from './admin/pages/ProjectStatus/ProjectStatus';
import Assign from './admin/pages/ProjectStatus/assign';
import Teamdetail from './admin/pages/ProjectStatus/teamdetails';
import Rmemplist from './admin/pages/RemoveEmployee/RemoveEmployee';
import Assigned from './admin/pages/Assign/assigned';
import Emplistaddnew from './admin/pages/UpdateEmployee/UpdateEmployee';
import Acess from './user/pages/Acessdenied';

import User from './user/pages/user';
import Homepa from './user/pages/Home/Home';
import History from './user/pages/ProjectHistory/ProjectHistory';
import Employee from './user/pages/PersonelDetails/PersonelDetails';
import Update from './user/pages/PersonelDetails/update';
import Search from './admin/pages/Search/Search';
//import Updateemp from './admin/pages/RewriteEmployee';
import Updateemp from './admin/pages/RewriteEmployee/update';
import Empcomplete from './admin/pages/Dashboard/dashboard';
import { IoMailOpen } from 'react-icons/io5';
//import Emplist from './admin/RemoveEmployee/RemoveEmployee';

function UserSessionRoute({ element: Component, ...rest }) {
  const doesUserHaveSession = localStorage.getItem('data');
  return (
    doesUserHaveSession ? (<Component {...rest} />) : (<Navigate to="/login" />)
  );
}

function App() {
  return (
    <div className='App'>
     {/* <div className='page-container'>
      <div className='content-wrap'> */}
        
        <BrowserRouter>
         
          <Routes>
            <Route path='/Accesdenied'element={<Acess/>}></Route>
            <Route path='/' element={<Userlogin />}></Route>
            <Route path='/user' element={<UserSessionRoute element={User} />}>
            
            <Route path='/user/Home' element={<Homepa />}></Route>
            <Route path='/user/ProjectHistory' element={<History />}></Route>
            <Route path='/user/PersonelDetails' element={<Employee/>}></Route>
            <Route path='/user/update'element={<Update/>}></Route>
            <Route path='/user/About' element={<About/>}></Route>
            <Route path='/user/LogOut' element={<LogOut/>}></Route>
            </Route>
            {/* admin sidebar */}
            
            <Route path='/admin' element={<UserSessionRoute element={Admin} />}>
            <Route path='/admin/Home' element={<Home />}></Route>
             <Route path='/admin/ProjectStatus' element={<Projectstatus />}></Route>
             {/* <Route path='/admin/AddEmployee' element={<Emplistadd/>}></Route> */}
            <Route path='/admin/todo/:Teamname' element={<Teamdetail/>}></Route>
            <Route path='/admin/assign/:Teamname' element={<Assign/>}></Route>
            <Route path='/admin/UpdateEmployee' element={<Emplistaddnew/>}></Route>
            <Route path='/admin/RewriteEmployee' element={<Updateemp/>}></Route>
            <Route path='/admin/assigned' element={<Assigned/>}></Route>
            <Route path='/admin/Rating' element={<RateEmp/>}></Route>
            <Route path='/admin/About' element={<About/>}></Route>
            <Route path='/admin/Search' element={<Search/>}></Route>
            <Route path='/admin/Dashboard' element={<Empcomplete/>}></Route>
            <Route path='/admin/RemoveEmployee' element={<Rmemplist/>}></Route>
            <Route path='/admin/LogOut' element={<LogOut />}></Route>
             
            </Route>
          </Routes>
        </BrowserRouter>
        
      
    </div>
  )
}

export default App;