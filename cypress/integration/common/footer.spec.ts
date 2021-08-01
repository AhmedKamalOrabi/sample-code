/// <reference types="cypress" />

describe('test footer component', () => {
  before(() => {
    cy.visit('/');
  });

  context('test footer Component', () => {
    it('test to contain HelloFresh copy right', () => {
      cy.get('[data-test-id="footer"]').should('have.text', '© HelloFresh 2020');
    });
  });
});
