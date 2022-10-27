import React, { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import bgimg from './bbb.svg'
import avatarimg from './pic.svg';
// import waveimg from './wavee.png'
import './Tllogin.css';
import{Icon} from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'

// import './todo.css'
export default function Userlogin() {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [use, setUse] = useState([])
    const[type,setType]=useState("password");
    const[icon,setIcon]=useState(eyeOff);
    const[msg,setMsg]=useState("")
    const[verified,setVerified]=useState(false);
    const navigate = useNavigate();
    // const[item,setItem]=useState([]);
    
    // const [use,setUse]=useState([]);
    // const [check,setCheck]=useState([]);
    const handleToggle=()=>{
        if(type==="password"){
            setIcon(eye);
            setType('text');
        }
        else{
            setIcon(eyeOff);
            setType("password");
        }
    }
    function onChange(value){
        console.log("Captcha value:" , value);
        setVerified(true);
    }
    function onsubmit() {
        //fetch(`http://localhost:3002/check`).then(res=>res.json()).then(data=>setCheck(data));
        fetch(`${process.env.REACT_APP_SERVER_PREFIX}/login`, { method: "post", body: JSON.stringify({ user, pass }), headers: { 'Content-type': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('data', data.Empid);
                if (data.role === "User") {
                    
                    setUse(data)
                    navigate(`/user/Home`)
                }
                else if (data.role === "Admin") {
                    navigate("/admin/Home")
                }
                else  {
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
                                {/* <h5>Username</h5>  */}
                                <input type="text" name="username" placeholder="Username" onChange={(e) => setUser(e.target.value)}></input>
                            </div>
                        </div>
                        <div class="input-div pass">
                            <div class="i">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div class="div">
                                {/* <h5>Password</h5>  */}
                                <input type={type} class="input" placeholder="Password" name="password" onChange={(e) => setPass(e.target.value)}></input>
                                <span className="click"onClick={handleToggle}><Icon icon={icon} size={10}/></span>
                            </div>
                        </div>
                        <div id="captcha">
                         <ReCAPTCHA
                          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                          onChange={onChange}
                         /></div>
                        {/* <a href="#">Forgot Password?</a> */}
                        <button class="btn" disabled={!verified} onClick={onsubmit}>LOGIN</button>
                        <h4>{msg}</h4>
                    </div>
            </div>
        </div>
    </div>
    )
}
