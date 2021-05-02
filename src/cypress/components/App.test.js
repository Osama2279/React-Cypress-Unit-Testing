import React from 'react';
import { mount } from '@cypress/react';
import App from '../../App';

describe('App', () => {
  it('renders learn react link', () => {
    mount(<App />);

    cy.viewport(2999, 2999);

    cy.contains('Learn React').should('be.visible');
  });
});
