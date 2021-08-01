/// <reference types="cypress" />
import { translate } from '../../../src/constants';
import hellofreshBox from '../../../src/data/hellofreshBox';

describe('test recipe selection page', () => {
  before(() => {
    cy.visit('/');
  });

  context('test Recipe Header Component', () => {
    it('test title to be Select Your Recipes', () => {
      cy.get('[data-test-id="recipe-title"]').should('have.text', translate('recipe.title.text'));
    });
    it('test recipe sub title ', () => {
      cy.get('[data-test-id="recipe-sub-title"]').should(
        'have.text',
        translate('recipe.subTitle.text')
      );
    });
    it('test box headline value to be WEEK OF OCTOBER 12TH', () => {
      cy.get('[data-test-id="headline"]').should('have.text', hellofreshBox.headline);
    });
  });

  context('test Recipe Card List Component', () => {
    it('test length of Recipe Card be equal box recipe', () => {
      cy.get('[data-test-id="recipe-list"] > div').should(
        'have.length',
        hellofreshBox.recipes.length
      );
    });
  });

  context('test Fourth recipe to test add button text', () => {
    const { id } = hellofreshBox.recipes[3];
    beforeEach(() => {
      cy.get(`[data-test-id=recipe-card-${id}]`).as('fourthRecipe');
    });
    it('test add  button to have text add extra meal', () => {
      cy.get('@fourthRecipe')
        .find('[data-test-id="unselected-recipe-footer"]')
        .should('have.text', 'Add extra meal');
    });
  });

  context('test Recipe Card Component', () => {
    const { id, image, name, headline, selected } = hellofreshBox.recipes[0];
    beforeEach(() => {
      cy.get(`[data-test-id=recipe-card-${id}]`).as('firstRecipe');
    });
    it('test First Recipe Card image to equal first recipe object', () => {
      cy.get('@firstRecipe').find('img').should('have.attr', 'src', image);
    });
    it('test First Recipe name to equal first recipe object', () => {
      cy.get('@firstRecipe').find('[data-test-id="recipe-name"]').should('have.text', name);
    });

    it('test First Recipe headline to equal first recipe object', () => {
      cy.get('@firstRecipe').find('[data-test-id="recipe-headline"]').should('have.text', headline);
    });

    it('test selected recipe footer to be exist', () => {
      cy.wrap(selected).should('equal', 1);
      cy.get('@firstRecipe').find('[data-test-id="selected-recipe-footer"]').should('exist');
    });
    it('test decrement button not have disbaled', () => {
      cy.get('@firstRecipe')
        .find('[title="Decrease quantity"]')
        .should('not.have.attr', 'disabled');
    });
    it('test increment button have disbaled', () => {
      cy.get('@firstRecipe').find('[title="Increase quantity"]').should('have.attr', 'disabled');
    });
    it('test click on decrement button and selected recipe footer to be exist', () => {
      cy.get('@firstRecipe').find('[title="Decrease quantity"]').click();
      cy.get('@firstRecipe').find('[data-test-id="selected-recipe-footer"]').should('not.exist');
      cy.get('@firstRecipe').find('[title="Decrease quantity"]').should('not.exist');
      cy.get('@firstRecipe').find('[title="Increase quantity"]').should('not.exist');
      cy.get('@firstRecipe').find('[data-test-id="unselected-recipe-footer"]').should('exist');
    });

    it('test add button to be exist', () => {
      cy.get('@firstRecipe')
        .find('[data-test-id="unselected-recipe-footer"]')
        .contains('Add')
        .should('exist')
        .click()
        .should('not.exist');
      cy.get('@firstRecipe').find('[data-test-id="selected-recipe-footer"]').should('exist');
    });
  });

  context('test Second Recipe Card Component', () => {
    const { id, selected, yields } = hellofreshBox.recipes[1];
    beforeEach(() => {
      cy.get(`[data-test-id=recipe-card-${id}]`).as('seondRecipe');
    });

    it('test selected number in box', () => {
      cy.get('@seondRecipe')
        .find('[data-test-id="selected-in-box"]')
        .should('have.text', `${selected} in your box`);
      cy.get('@seondRecipe')
        .find('[data-test-id="selected-of-servings"]')
        .should('have.text', `(${selected * yields} servings)`);
    });

    it('increment selected number in box when click on increment button', () => {
      cy.get('@seondRecipe').find('[title="Increase quantity"]').click();
      cy.get('@seondRecipe')
        .find('[data-test-id="selected-in-box"]')
        .should('have.text', `${selected + 1} in your box`);
    });

    it('test disabled add button when reach to maxlimit', () => {
      cy.wrap(new Array(4)).each(() => {
        cy.get('@seondRecipe').find('[title="Increase quantity"]').click();
      });
      cy.get('[data-test-id="recipe-list"] > div:nth-child(4)')
        .find('[data-test-id="unselected-recipe-footer"]')
        .find('button')
        .should('have.text', 'Add extra meal')
        .and('have.attr', 'disabled');
    });

    it('test total price is updated', () => {
      cy.get('[data-test-id="total-price"]').should('have.text', '$156.82');
    });
    it('test show sumary price info when click on info button', () => {
      cy.get('[data-test-id="summary-info-button"]').click();
      cy.get('[data-test-id="price-list"]').should('be.exist');
    });
    it('test sum all item price equal total', () => {
      let itemsPrice = 0;
      cy.get('[data-test-id="item-price"]').each((item) => {
        itemsPrice += parseFloat(item.text().replace('$', ''));
      });

      cy.get('[data-test-id="total-price"]').then((totalElem) => {
        const totalPrice = parseFloat(totalElem.text().replace('$', ''));
        cy.wrap(itemsPrice).should('equal', totalPrice);
      });
    });

    it('test close price summary when click outside menu', () => {
      cy.get('[data-test-id="header"]').click();
      cy.get('[data-test-id="price-list"]').should('not.exist');
    });
  });
});
