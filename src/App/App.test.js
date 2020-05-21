import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("App", () => {
	describe("Integration", () => {
		it("should add a new Reservation when the Form is filled out and the make reservation button clicked", () => {
			const { getByText, getByPlaceholderText, debug } = render(<App />);
			const nameInput = getByPlaceholderText("Name");
			const dateInput = getByPlaceholderText("Date");
			const timeInput = getByPlaceholderText("Time");
			const numberInput = getByPlaceholderText("Number of guests");
			const submitBtn = getByText("MAKE RESERVATION");

			fireEvent.change(nameInput, { target: { value: "B.J. Lover" } });
			fireEvent.change(dateInput, { target: { value: "1/20/2031" } });
			fireEvent.change(timeInput, { target: { value: "7:00" } });
			fireEvent.change(numberInput, { target: { value: "2" } });

			fireEvent.click(submitBtn);

			const timeAndDate = getByText("1/20/2031 at 7:00");
			expect(timeAndDate).toBeInTheDocument();
		});
	});
});

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
