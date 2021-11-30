import React from "react";
import "../App.css";

const Form = (props)=>{
	return (
		<>
			<div className="body my-5 mx-auto">
				<h2 class="form">Simple Weather App</h2>
				<form class="text-center border border-light p-4" onSubmit={props.loadweather}>
					<input type="text" name="city" class="form-control" placeholder="Type city name" required />
				</form>
			</div>
		</>
	);
}

export default Form;
