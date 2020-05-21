import React, { Component } from "react";
import "./App.css";

import { getReservations, postReservation } from "../apiCalls";
import Reservations from "../Reservations/Reservations";
import Form from "../Form/Form";

class App extends Component {
	state = {
		reservations: [],
	};

	componentDidMount = async () => {
		let fetchedReservations = await getReservations(
			"http://localhost:3001/api/v1/reservations"
		);
		this.setState({
			reservations: [...this.state.reservations, ...fetchedReservations],
		});
	};

	addReservation = (reservation) => {
		this.setState({ reservations: [...this.state.reservations, reservation] });
		postReservation("http://localhost:3001/api/v1/reservations", reservation);
	};

	render() {
		return (
			<div className="App">
				<h1 className="app-title">Turing Cafe Reservations</h1>
				{/* <div className="resy-form"> */}
				<Form addReservation={this.addReservation} />
				{/* </div> */}
				<div className="resy-container">
					<Reservations reservations={this.state.reservations} />
				</div>
			</div>
		);
	}
}

export default App;
