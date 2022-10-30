
import React from 'react'
import './LogOutbtn.css'
import {useNavigate} from 'react-router-dom'
export default function LogOutbtn(){
  const navigate=useNavigate()
   
   function logout(){
//    localStorage.removeitem('data');
     navigate('/')

   }

  return(
    <button className='lpushable' color="inherit" onClick={logout}><span className='lfront'>LogOut</span></button>
  )
}