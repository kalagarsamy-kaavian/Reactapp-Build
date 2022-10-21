import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import Search from './Search';
import logo from "./logo.png";
// import adminsc from "./adminsc.png"
// import { BiLogOut } from "react-icons/bi";
// import { GrUserAdmin } from "react-icons/gr";
import LogOutbtn from './LogOutbtn';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./Header.css";


function Header() {
    return (<div className='header'>
        <AppBar position='static'>

            <Toolbar>
                {/* <IconButton
                    size="large"
                    edge="start"
                    color='#0000ff'
                    aria-label="menu"
                    sx={{mr:2}}>
                        
                    </IconButton> */}

                <h1 className='hadmin'>ADMIN<AccountCircleOutlinedIcon className='Adminlogo' /></h1>
                {/* <img className='admin'src={adminsc} alt='adminlogo'></img> */}
                <img className='himg' src={logo} alt="logo"></img>
                <Typography className='htitlename' variant='h6' component="div" sx={{ flexGrow: 1 }}>Project Management System</Typography>
                {/* <Search /> */}
                <LogOutbtn />
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Header;