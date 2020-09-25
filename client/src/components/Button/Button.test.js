import React from "react";
import renderer from "react-test-renderer";
import { Button } from "./Button";
import { faUser } from "@fortawesome/free-solid-svg-icons";

test("matches snapshot", () => {
  const component = renderer.create(
    <Button
      classes="button is-light is-medium"
      icon={faUser}
      label="Test"
    ></Button>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("initializes a button", () => {
  const component = renderer.create(
    <Button
      classes="button is-light is-medium"
      icon={faUser}
      label="Test"
    ></Button>
  );

  let tree = component.toJSON();
  expect(tree.type).toEqual("a");
  expect(tree.props.className).toEqual("button is-light is-medium");
});

test("can add a font awesome icon", () => {
  const component = renderer.create(
    <Button
      classes="button is-light is-medium"
      icon={faUser}
      label="Test"
    ></Button>
  );

  let tree = component.toJSON();
  expect(tree.children[0].props.className).toContain("fa-user");
});

test("can add a button with no icon", () => {
  const component = renderer.create(
    <Button
      classes="button is-light is-medium"
      label="Test"
    ></Button>
  );

  let tree = component.toJSON();
  expect(tree.children[0]).toEqual(" ");
});
