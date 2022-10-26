// import React from 'react'
// // import {BiLogOut} from "react-icons/bi";
// // import Button from "@mui/material/Button";


// export const LogOut = (props) => {
//   return (
//     <form action='/LogOut' method='get'>
//         <label htmlFor="Header-logout">
//                 <span className="b"></span>
//             </label>

//     <button className='pushable' color="inherit" type='submit'><span className='front'><h9 className="btn2">LogOut</h9></span></button>

//     </form>
//   )
// }


// export default LogOut;
import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function LogOutbtn(){
  const navigate=useNavigate()
   
   function logout(){
     navigate('/')
   }

  return(
    <button className='pushable' color="inherit" onClick={logout}><span className='front'>LogOut</span></button>
  )
}