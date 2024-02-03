import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import VendingMachine from "./VendingMachine";

test("renders without crashing", () => {
  render(
    <Router>
      <VendingMachine />
    </Router>
  );
});

test("matches snapshot", () => {
  const { asFragment } = render(
    <Router>
      <VendingMachine />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders correct text", () => {
  render(
    <Router>
      <VendingMachine />
    </Router>
  );
  const linkElement = screen.getByText(/Welcome to the Vending Machine!/i);
  expect(linkElement).toBeInTheDocument();
});
