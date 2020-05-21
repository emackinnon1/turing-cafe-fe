import React from "react";
import "./Reservations.css";
import ReservationCard from "../ReservationCard/ReservationCard";

const Reservations = (props) => {
	const reservations = props.reservations.map((res, i) => (
		<ReservationCard key={i} {...res} />
	));
	return <>{reservations}</>;
};

export default Reservations;
