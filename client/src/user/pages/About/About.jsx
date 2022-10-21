import React from 'react';
import "./about.css";

function About() {
    return (<div className='about_wrap'>
        <div className='heading'>
            <h20>ABOUT</h20>
        </div>

        <div className='texts'>
            <div className='blueteam'>
                <h25 data-text="BLUETEAM.....">BLUETEAM.....</h25>
            </div>
            <div className='intro'>
                <h21>Hello, We,The Blue Team has build this application. <br></br> </h21>
                <h22>It has many usable Features that make things convinient for the accesser.<br></br></h22>
                <h22>Here are the list of Features that is avaliable in this application,</h22>
            </div>
            <div className='list'>
                <li>Assign</li>
                <li>Edit</li>
                <li>View</li>
                <li>Rating</li>
                <li>Search</li>
                <li>Status</li>
                <li>Delete</li>
            </div>
            <div className='icons'>
                <h26></h26>
            </div>
            <div className='para'>
                <h27>Vision:<br></br></h27>
                <h23>We Created this application(PMS) to make Assigning,checking details about both<br></br></h23>
                <h24>Employee and project.It will make the Process lot easier and help to maintain<br></br></h24>
                <h28>the record and details orderly.</h28>

                <div className='para2'>
                    <p>The Jorney:<br></br>
                        Even though this is a mini project, This is our first Project as a Team.<br></br>
                        Yes, We faced defficulties, But we never gave up, Our hard work is the application your seeing and using now. <br></br>
                    <h29>"Team Work Makes Dream Work"</h29> <br></br>
                 By following this simple yet a true quotes and working together,we were able to come out successfull in the end.<br></br>
                Thank You for using our application, we hope it benefits you greatly in the you intended.</p><br></br>
            <div><h30>THANK YOU</h30></div>
        </div>
    </div>
        </div >
    </div >
    )
}

export default About;
