import React from "react";
import renderer from "react-test-renderer";
import { Button } from "./Button";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { fireEvent, render} from "@testing-library/react";

const mockClickHandler = jest.fn();

test("initializes a button", () => {
  const component = renderer.create(
    <Button
      classes="button is-light is-medium"
      icon={faUser}
      label="Test"
      onClickHandler={mockClickHandler}
    ></Button>
  );

  let tree = component.toJSON();
  expect(tree.type).toEqual("a");
  expect(tree.props.className).toEqual("button is-light is-medium");
});

describe("buttons can have icons", () => {
  test("can add a font awesome icon", () => {
    const component = renderer.create(
      <Button
        classes="button is-light is-medium"
        icon={faUser}
        label="Test"
        onClickHandler={mockClickHandler}
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
        onClickHandler={mockClickHandler}
      ></Button>
    );

    let tree = component.toJSON();
    expect(tree.children[0]).toEqual(" ");
  });
});

describe("buttons can have click handlers", () => {
  test("errors if no click handler", () => {});

  test("invokes click handler", () => {
    const {getByText} = render(
      <Button
        classes="button is-light is-medium"
        label="Test Me"
        onClickHandler={mockClickHandler}
      ></Button>
    );

    const node = getByText("Test Me");
    fireEvent.click(node);
    expect(mockClickHandler).toHaveBeenCalled();
  });
});
