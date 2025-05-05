import React from "react";
import '../../styles/box.css'


export const Clock = (props) =>{

    return (
		<div className="container-fluid d-flex justify-content-center align-items-center">
			<i className="fa-regular fa-clock"></i>
			<div id="h1" className="box-card">0</div>
			<div id="h2" className="box-card">0</div>
			<div className="box-card-sep">:</div>
			<div id="m1" className="box-card">0</div>
			<div id="m2" className="box-card">0</div>
			<div className="box-card-sep">:</div>
			<div id="s1" className="box-card">0</div>
			<div id="s2" className="box-card">{props.counter} </div>
		</div>
    )
}