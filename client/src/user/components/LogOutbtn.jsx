import React from 'react'
// import {BiLogOut} from "react-icons/bi";
// import Button from "@mui/material/Button";


export const LogOutbtn = (props) => {
  return (
    <form action='/LogOut' method='get'>
        <label htmlFor="Header-logout">
                <span className="b"></span>
            </label>

    <button className='pushable' color="inherit" type='submit'><span className='front'><h9 className="btn2">LogOut</h9></span></button>

    </form>
  )
}


export default LogOutbtn;