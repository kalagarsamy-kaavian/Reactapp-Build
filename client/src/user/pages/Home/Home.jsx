import React, { useEffect, useState } from "react";
import homeimg from './image1.svg';
import waveimg from './wav.png';
import welcome from './welcome.svg';
import './Home.css';
function Homepa() {

	return <div>
		<div className="pmshead">
			<h1>PROJECT  MANAGEMENT  SYSTEM</h1>
			<h1>PROJECT  MANAGEMENT  SYSTEM</h1>
		</div>

		<div className="homesection">
			{/* <img class="wel" src={welcome} /> */}
			<div className="contentBox">
				<h1> Learning Made Easy</h1>
				<p>Project Management System is designed to help businesses and individuals track projects, tasks, and schedules. It's a great way to stay organized and ensure that your team remains on-task.It provides structure and control of the project environment so that the agreed activities will produce the right products or services to meet the customer's expectations.</p>

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


		</div>
		<div className="imgContainer">
			<img src={homeimg} alt="home" />
		</div>
		
	</div>
}
export default Homepa;