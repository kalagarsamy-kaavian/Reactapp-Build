// import React from 'react'
// // import {BiLogOut} from "react-icons/bi";
// // import Button from "@mui/material/Button";


// export const LogOutbtn = (props) => {
//   return (
//     <form action='/LogOut' method='get'>
//         <label htmlFor="Header-logout">
//                 <span className="b"></span>
//             </label>

//     <button className='pushable' color="inherit" type='submit'><span className='front'>LogOut</span></button>

//     </form>
//   )
// }


// export default LogOutbtn;
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