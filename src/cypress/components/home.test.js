import React from "react";
import { mount } from "@cypress/react";
import Home from "../../views/home";

describe("Home", () => {
  it("renders learn react link", () => {
    cy.viewport(900, 900);
    mount(<Home />);
    cy.contains("Learn React").should("be.visible");
  });
});
