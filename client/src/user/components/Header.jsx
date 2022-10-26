import React from 'react';
import "./header.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Search from './Search';
import logo from "./logo.png";
import {BiLogOut,BiUser} from "react-icons/bi";
import LogOutbtn from './LogOutbtn';
import Complete from './complete';
import { GrUserAdmin } from "react-icons/gr";
import {useState,useEffect} from'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function Header() {

    const id = localStorage.getItem('data');
    return (
        <AppBar className='header' position='static'>

            <Toolbar> 
                {/* <IconButton
                    size="large"
                    edge="start"
                    color='#0000ff'
                    aria-label="menu"
                    sx={{mr:2}}>
                        
                    </IconButton> */}

                <h1 className='huser'>USER<AccountCircleOutlinedIcon className='usericon'/></h1>    
                <img className='himg' src={logo} alt="logo"></img>
                <Typography className='htitlename' variant='h6' component="div" sx={{ flexGrow: 1 }}>Project Management System</Typography>
                {/* <Search /> */}
                <LogOutbtn/>
             <Complete/>
                
                {/* <Button color="inherit">LogOut<BiLogOut className='logout'/></Button> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;