import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import Search from './Search';
import logo from "./logo.png";
import {BiLogOut,BiUser} from "react-icons/bi";
import LogOutbtn from './LogOutbtn';
// import { GrUserAdmin } from "react-icons/gr";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function Header() {
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

                <h1 className='user'>USER<AccountCircleOutlinedIcon className='usericon'/></h1>    
                <img className='img' src={logo} alt="logo"></img>
                <Typography className='titlename' variant='h6' component="div" sx={{ flexGrow: 1 }}><h1>Project Management System</h1></Typography>
                <Search />
                <LogOutbtn/>
                {/* <Button color="inherit">LogOut<BiLogOut className='logout'/></Button> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;