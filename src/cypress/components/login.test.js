import React from "react";
import { mount } from "@cypress/react";
import Login from "../../views/login";

describe("Login", () => {
  it("renders learn react link", () => {
    cy.viewport(900, 900);
    mount(<Login />);
    cy.contains("Learn React", { timeout: 1000 }).should("be.visible");
  });
});
