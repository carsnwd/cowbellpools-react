import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { Navbar } from "./Navbar"


describe("hamburger menu", () => {    
    test("can activate and deactiveate the hamburger menu", () => {
        render(<Navbar/>);
        const node = screen.getByRole("burger-button");
        expect(node).not.toHaveClass("is-active");
        expect(node).toHaveClass("navbar-burger burger");
        fireEvent.click(node);
        expect(node).toHaveClass("navbar-burger burger is-active");
    });
});