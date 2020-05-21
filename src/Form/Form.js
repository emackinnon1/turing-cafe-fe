import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
	state = {
		name: "",
		date: "",
		time: "",
		number: "",
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	submitReservation = (event) => {
		event.preventDefault();
		const newRes = {
			name: this.state.name,
			date: this.state.date,
			time: this.state.time,
			number: Number(this.state.number),
		};
		this.props.addReservation(newRes);
	};

	render() {
		return (
			<form className="resy-form">
				<input
					type="text"
					placeholder="Name"
					name="name"
					value={this.state.name}
					onChange={(event) => this.handleChange(event)}
				/>

				<input
					type="text"
					placeholder="Date"
					name="date"
					value={this.state.date}
					onChange={(event) => this.handleChange(event)}
				/>

				<input
					type="text"
					placeholder="Time"
					name="time"
					value={this.state.time}
					onChange={(event) => this.handleChange(event)}
				/>

				<input
					type="text"
					placeholder="Number of guests"
					name="number"
					value={this.state.number}
					onChange={(event) => this.handleChange(event)}
				/>

				<button onClick={this.submitReservation} type="button">
					MAKE RESERVATION
				</button>
			</form>
		);
	}
}

export default Form;
