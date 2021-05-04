import { USER_EMAIL, USER_PASSWORD } from "../../views/login";

describe("Login Flow", () => {
  beforeEach(() => {
    cy.viewport(900, 900);
    cy.visit("/");
  });

  it("Validating Fields", () => {
    cy.get("form").submit();
    cy.screenshot("Validations-empty");

    cy.get('input[name="username"]').type("aaaa");
    cy.wait(1000);
    cy.get("form").submit();
    cy.screenshot("Validations-wrong-email");
  });

  it("Just Failed", () => {
    cy.contains("Learn React", { timeout: 1000 }).should("be.visible");
  });

  it("Authenticating", () => {
    cy.login(USER_EMAIL, USER_PASSWORD);
  });
});
