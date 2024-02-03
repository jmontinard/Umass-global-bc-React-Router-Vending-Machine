import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Snack from "./Snack";

test("renders without crashing", () => {
  render(
    <Router>
      <Snack />
    </Router>
  );
});

test("matches snapshot", () => {
  const { asFragment } = render(
    <Router>
      <Snack />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders correct text", () => {
  render(
    <Router>
      <Snack />
    </Router>
  );
  const linkElement = screen.getByText(/Go back/i);
  expect(linkElement).toBeInTheDocument();
});
// npm install --save-dev @testing-library/react @testing-library/jest-dom
