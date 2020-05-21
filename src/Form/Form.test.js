import React from "react";
import Form from "./Form";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("Form", () => {
	describe("unit tests", () => {
		it("should render the correct information", () => {
			const { getByPlaceholderText } = render(<Form />);

			const nameInput = getByPlaceholderText("Name");
			const dateInput = getByPlaceholderText("Date");
			const timeInput = getByPlaceholderText("Time");
			const numberInput = getByPlaceholderText("Number of guests");

			expect(nameInput).toBeInTheDocument();
			expect(dateInput).toBeInTheDocument();
			expect(timeInput).toBeInTheDocument();
			expect(numberInput).toBeInTheDocument();
		});

		it("should change value when data is put into the form", () => {
			const { getByPlaceholderText, getByDisplayValue } = render(<Form />);

			const nameInput = getByPlaceholderText("Name");

			fireEvent.change(nameInput, { target: { value: "B.J. Lover" } });

			const nameData = getByDisplayValue("B.J. Lover");

			expect(nameData).toBeInTheDocument();
		});
	});
});
