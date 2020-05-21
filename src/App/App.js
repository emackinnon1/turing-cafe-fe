import React, { Component } from "react";
import "./App.css";

import { getReservations } from "../apiCalls";

class App extends Component {
	state = {
		reservations: [],
	};

	componentDidMount = async () => {
		let fetchedReservations = await getReservations(
			"http://localhost:3001/api/v1/reservations"
		);
		console.log(fetchedReservations);
		this.setState({
			reservations: [...this.state.reservations, ...fetchedReservations],
		});
	};

	render() {
		console.log(this.state);
		return (
			<div className="App">
				<h1 className="app-title">Turing Cafe Reservations</h1>
				<div className="resy-form"></div>
				<div className="resy-container"></div>
			</div>
		);
	}
}

export default App;
