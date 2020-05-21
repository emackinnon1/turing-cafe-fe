import React from "react";
import Form from "./Form";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("Form", () => {
	it("should render the correct information", () => {
		const { getByPlaceholderText, debug } = render(<Form />);

		const nameInput = getByPlaceholderText("Name");
		const dateInput = getByPlaceholderText("Date");
		const timeInput = getByPlaceholderText("Time");
		const numberInput = getByPlaceholderText("Number of guests");

		expect(nameInput).toBeInTheDocument();
		expect(dateInput).toBeInTheDocument();
		expect(timeInput).toBeInTheDocument();
		expect(numberInput).toBeInTheDocument();
	});
});
