import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("init", () => {
  const { getByRole } = render(<App />);
  const app = getByRole("app");
  expect(app).toBeInTheDocument();
});
