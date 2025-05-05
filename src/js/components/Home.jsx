import React from "react";
import { Clock } from "./Clock";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
	let counter = 0;
	const startCounter = () =>{
		setInterval(() =>{
			counter++

			let hours = Math.floor(counter / 3600);
			let minutes = Math.floor((counter % 3600) / 60);
			let seconds = counter % 60;
			
			let hStr = hours.toString().padStart(2, '0');
			let mStr = minutes.toString().padStart(2, '0');
			let sStr = seconds.toString().padStart(2, '0');

			document.querySelector("#h1").textContent = hStr[0];
			document.querySelector("#h2").textContent = hStr[1];
			document.querySelector("#m1").textContent = mStr[0];
			document.querySelector("#m2").textContent = mStr[1];
			document.querySelector("#s1").textContent = sStr[0];
			document.querySelector("#s2").textContent = sStr[1];
		},1000)
	}

	window.onload = startCounter;

	return (
		<div>
			<Clock counter={counter} />
		</div>
	);
};

export default Home;
