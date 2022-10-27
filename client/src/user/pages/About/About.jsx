import React from 'react';
import "./About.css";
// import aboutimg from "./about.png"


// import About_top from "./About_top.png";
// import About_side from "./About_side.jpg";

function About() {
    return (<div className='about_wrap'>
        {/* <img src={aboutimg} alt='aboutimg'></img> */}

        <h100> ABOUT US </h100>
        
        <div className='texts'>
            {/* <div className='blueteam'>
                <h20 data-text="BLUETEAM.....">BLUETEAM.....</h20>
            </div> */}
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
        </div >
        
    </div >
    )
}

export default About;