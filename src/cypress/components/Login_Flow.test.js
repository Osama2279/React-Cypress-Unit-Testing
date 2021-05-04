import React from "react";
import { mount } from "@cypress/react";
import Login from "../../views/login";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "../../styles/styles.css";

describe("Login Flow", () => {
  beforeEach(() => {
    cy.viewport(900, 900);
    mount(<Login />);
  });

  it("Validating form with invalid and valid data", () => {
    cy.get("form").submit();
    cy.screenshot("Validations-empty");

    cy.get('input[name="username"]').type("aaaa");
    cy.get("form").submit();
    cy.screenshot("Validations-wrong-email");
  });
});
