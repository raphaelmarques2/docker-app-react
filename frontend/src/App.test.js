import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link 1", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link 2", () => {
  render(<App />);
  const linkElement3 = screen.getByText(/learn react/i);
  expect(linkElement3).toBeInTheDocument();
});