import React from "react";
import renderer from "react-test-renderer";
import { Button } from "./Button";

test("initializes a button", () => {
  const component = renderer.create(
    <Button
      classes="button is-light is-medium"
      icon="icon"
      label="Test"
    ></Button>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
