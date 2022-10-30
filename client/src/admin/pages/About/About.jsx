import React from 'react';
import "./About.css";
// import aboutimg from "./about.png"


// import About_top from "./About_top.png";
// import About_side from "./About_side.jpg";

function About() {
    return (<div className='about_wrap'>
       
         <div className='aboutheading'>   
         <h100> ABOUT US </h100>
         </div>   
         
       {/* <div className='texts'>
          
            <div className='blueteam'> Blue Team </div>
            
            <div className='intro'>
                <h3>Hello, We,The Blue Team has build this application. <br></br> </h3>
                <h3>It has many usable Features that make things convinient for the accesser.<br></br></h3>
                <h3>Here are the list of Features that is avaliable in this application,</h3>
            </div>
            <div className='list'>
                <li>Assign</li>
                <li>Edit  </li>
                <li>View  </li>
                <li>Rating</li>
                <li>Search</li>
                <li>Status</li>
                <li>Delete</li>
            </div>
            
            <div className='para'>
                <h4>Vision:<br></br></h4>
                <h5>We Created this application(PMS) to make Assigning,checking details about both<br></br></h5>
                <h5>Employee and project.It will make the Process lot easier and help to maintain<br></br></h5>
                <h5>the record and details orderly.</h5>
                <div className='para2'>
                    <p>The Jorney:<br></br>
                        Even though this is a mini project, This is our first Project as a Team.<br></br>
                        Yes, We faced defficulties, But we never gave up, Our hard work is the application your seeing and using now. <br></br>
                        <h6>"Team Work Makes Dream Work"</h6> <br></br>
                        By following this simple yet a true quotes and working together,we were able to come out successfull in the end.<br></br>
                        Thank You for using our application, we hope it benefits you greatly in the way you intended.</p><br></br>
                    <div><h7>THANK YOU</h7></div>
                </div>
            </div>
        </div > */}

        <div>
            <h21>Blue Team</h21>
        </div>
        <div className='para'>
        <p className='p'>
            Hello, This application was build by our team (Blue Team). 
        </p>
        <p className='p1'>
            This application is used to maintain project management, and Employee details at the same time.<br></br>
            You can use our application to create new project, check its status, add Employee details to the DataBase,<br></br>
            also it can be Edit and delete those Details.<br></br> 
        </p>
        <p className='p2'>
            TEAM LEADER:<br></br>
            Divya Dharshini Murugan<br></br>
            MEMBERS:<br></br>
            Meenakshi<br></br>
            Thangalakshmi<br></br>
            Alagarsamy<br></br>
            Bhoopesh kumar<br></br>
        </p>
        <p className='p3'>
            Thank you for using our application, we hope it is useful and does its role without any problem.<br></br> 
        </p>
        <p className='p4'>THANK YOU</p>
        </div>
        <div className='aboutimg'>
        <img src='/images/about.svg'></img>
    </div>
        
    </div >
    )
}

export default About;