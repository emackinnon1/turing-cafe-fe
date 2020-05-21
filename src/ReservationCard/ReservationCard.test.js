import React from "react";
import ReservationCard from "./ReservationCard";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("ReservationCard", () => {
	const resInfo = {
		name: "Hugh Jass",
		date: "01/20/2020",
		time: "7:00",
		number: 2,
	};

	it("should render the correct information", () => {
		const { getByText } = render(<ReservationCard {...resInfo} />);

		const name = getByText("Hugh Jass");
		const dateAndTime = getByText("01/20/2020 at 7:00");
		const number = getByText("Number of guests: 2");

		expect(name).toBeInTheDocument();
		expect(dateAndTime).toBeInTheDocument();
		expect(number).toBeInTheDocument();
	});
});
