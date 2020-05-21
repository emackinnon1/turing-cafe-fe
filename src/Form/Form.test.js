import React from "react";
import Form from "./Form";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("Form", () => {
	it("should render the correct information", () => {
		const { getByPlaceholderText, debug } = render(<Form />);
		debug();
	});
});
