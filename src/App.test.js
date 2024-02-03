import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

test("renders without crashing", () => {
  render(
    <Router>
      <App />
    </Router>
  );
});

test("matches snapshot", () => {
  const { asFragment } = render(
    <Router>
      <App />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders VendingMachine component", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/Welcome to the Vending Machine!/i);
  expect(linkElement).toBeInTheDocument();
});
