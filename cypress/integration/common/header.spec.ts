/// <reference types="cypress" />
import { translate } from '../../../src/constants';

describe('test header component', () => {
  before(() => {
    cy.visit('/');
  });

  context('test header Component', () => {
    it('test to contain HelloFresh Logo and have proper href', () => {
      cy.get('[data-test-id="header"]').as('header');
      cy.get('@header')
        .find('a')
        .should('have.attr', 'href', '/')
        .and('have.attr', 'title', translate('header.logo.title', 'en'));
      cy.get('@header').click();
      cy.location('pathname').should('equal', '/');
      cy.get('@header')
        .find('img')
        .should('have.attr', 'src', '/HelloFreshLogo.png')
        .and('have.attr', 'alt', translate('header.logo.alt'));
    });
  });
});
