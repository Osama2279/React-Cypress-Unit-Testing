import React from "react";
import { mount } from "@cypress/react";
import Home from "../../views/home";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "../../styles/styles.css";

describe("Home", () => {
  it("renders learn react link", () => {
    cy.viewport(900, 900);
    mount(<Home />);
    cy.contains("Learn React").should("be.visible");
  });
});
