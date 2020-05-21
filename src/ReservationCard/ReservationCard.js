import React from "react";
import "./ReservationCard.css";

const ReservationCard = ({ date, id, name, number, time }) => {
	return (
		<div className="res-card">
			<h2>{name}</h2>
			<p>
				{date} at {time}
			</p>
			<p>Number of guests: {number}</p>
		</div>
	);
};

export default ReservationCard;
