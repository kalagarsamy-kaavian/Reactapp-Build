//Importing the required packages
import React, { useState } from 'react';
//importing ReCAPTCHA to use captcha in login page
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import bgimg from './bbb.svg'
import avatarimg from './pic.svg';
import './Tllogin.css';
//react-icons-kit for show password icon
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
//function to create login page contents
export default function Userlogin() {
    //declaring the needed variables
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [use, setUse] = useState([])
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeOff);
    const [msg, setMsg] = useState('')
    const [verified, setVerified] = useState(false);
    const [id, setid] = useState('');
    const [role, setrole] = useState('');
    const navigate = useNavigate();
    //function to toggle to show and hide password
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password');
        }
    }
    //function to set captcha value to true once captcha is verified    
    function onChange(value) {
        console.log('Captcha value:', value);
        setVerified(true);
    }
    //function to check and navigate to pages based on logged in user's role    
    function onsubmit() {
        //fetch call with username and password entered
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/login`, { method: "post", body: JSON.stringify({ user, pass }), headers: { 'Content-type': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('data', data.token);
                setid(data.use.Empid);
                setrole(data.use.role);
                //if logged in member's role is User navigates to user home page
                if (role === "User") {
                    console.log(data);
                    setUse(data)
                    navigate(`/user/Home`)
                }
                //if logged in member's role is Admin navigates to Admin home page
                else if (role === "Admin") {
                    navigate("/admin/Home")
                }
                else {
                    setMsg(msg)
                }
            })
    }
    return (<div>
        {/* <img class="wave" src={waveimg} /> */}
        <div class="container">
            <div class="img">
                <img src={bgimg} />
            </div>
            <div class="login-content">
                <div>
                    <img src={avatarimg} />
                    <h2 class="title">Welcome</h2>
                    <div class="input-div one">
                        <div class="i">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="div">
                            {/* text field to enter username */}
                            <input type="text" name="username" placeholder="Username" onChange={(e) => setUser(e.target.value)}></input>
                        </div>
                    </div>
                    <div class="input-div pass">
                        <div class="i">
                            <i class="fas fa-lock"></i>
                        </div>
                        <div class="div">
                            {/* text field to enter password */}
                            <input type={type} class="input" placeholder="Password" name="password" onChange={(e) => setPass(e.target.value)}></input>
                            {/* eye icon with handletoggle function used to toggle between icon */}
                            <span className="click" onClick={handleToggle}><Icon icon={icon} size={10} /></span>
                        </div>
                    </div>
                    <div id="captcha">
                        {/* Recaptcha function to implement google recaptcha */}
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        /></div>
                        {/* submit button */}
                    <button class="btn" disabled={!verified} onClick={onsubmit}>LOGIN</button>
                    <h4>{msg}</h4>
                </div>
            </div>
        </div>
    </div>
    )
}
