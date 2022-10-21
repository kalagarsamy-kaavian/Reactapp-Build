import React, { useEffect, useState } from "react";
import homeimg from './image1.svg';
import waveimg from './wav.png'
import './Home.css';
 function Home() {
	//const [item, setItem] = useState([]);
	//Fetch the data in Database display UI
	// useEffect(() => {
	// 	fetch('http://localhost:3001/pms/Hometl').then(res => res.json()).then(data => setItem(data));
	// }, []);
	return <div>
			<div className="h_heading">
			<h1>PROJECT  MANAGEMENT  SYSTEM</h1>
			<h1>PROJECT  MANAGEMENT  SYSTEM</h1>
			</div>
			
			<div className="homesection">
			<img class="wave" src={waveimg}/>
				<div className="h_contentBox"> 
					<h1> Learning Made Easy</h1>
					<p>Project Management System is designed to help businesses and individuals track projects, tasks, and schedules. It's a great way to stay organized and ensure that your team remains on-task</p>
					
						<div className="welcome">
							
								<span class='circle'>W</span>
								<span class='circle'>E</span>
								<span class='circle'>L</span>
								<span class='circle'>C</span>
								<span class='circle'>O</span>
								<span class='circle'>M</span>
								<span class='circle'>E</span>
								<span> &nbsp;&nbsp;&nbsp; </span>
								<span class='circle'>T</span>
								<span class='circle'>O</span>
								<span> &nbsp;&nbsp;&nbsp;</span>
								<span class='circle'>P</span>
								<span class='circle'>M</span>
								<span class='circle'>S</span>
							
						</div>
					
				</div>
				<div className="imgContainer">
					<img src={homeimg} alt="home"/>
				</div>
			</div></div>
      }
      export default Home;



























