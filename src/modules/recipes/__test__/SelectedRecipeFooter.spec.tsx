import React from 'react';
import { render } from '@testing-library/react';
import { SelectedRecipeFooter } from '../SelectedRecipeFooter';

describe('Test Header component', () => {
  it('Header component render properly', () => {
    const props = {
      yields: 2,
      handleAddRecipe: () => console.log('test'),
      handleRemoveRecipe: () => () => console.log('test'),
      maxRecipesSelected: false,
      selectionLimit: 2,
      selected: 1,
      recipeId: '21',
    };
    const { container } = render(<SelectedRecipeFooter {...props} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="sc-bdnylx sc-dlnjPT gKxRuq"
          data-test-id="selected-recipe-footer"
          display="flex"
        >
          <button
            class="sc-gKAblj eshVnz"
            title="Decrease quantity"
          >
            <svg
              class="sc-iCoHVE DOxDv"
              height="24"
              viewBox="0 0 32 32"
              width="24"
            >
              <path
                d="M16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3zm0 1.5C9.649 4.5 4.5 9.649 4.5 16S9.649 27.5 16 27.5 27.5 22.351 27.5 16 22.351 4.5 16 4.5zM22 15v2H10v-2h12z"
              />
            </svg>
          </button>
          <div
            class="sc-bdnylx kwhRwX"
            color="white"
          >
            <div
              class="sc-hKFyIo hBdrEN"
              data-test-id="selected-in-box"
              font-family="secondary"
              font-size="md"
              font-weight="bold"
            >
              1
               in your box
            </div>
            <div
              class="sc-hKFyIo bNcVBw"
              data-test-id="selected-of-servings"
              font-family="secondary"
              font-size="sm"
            >
              (
              2
               servings)
            </div>
          </div>
          <button
            class="sc-gKAblj eshVnz"
            title="Increase quantity"
          >
            <svg
              class="sc-iCoHVE DOxDv"
              height="24"
              viewBox="0 0 32 32"
              width="24"
            >
              <path
                d="M16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3zm0 1.5C9.649 4.5 4.5 9.649 4.5 16S9.649 27.5 16 27.5 27.5 22.351 27.5 16 22.351 4.5 16 4.5zm1 5.5v5h5v2h-5v5h-2v-5h-5v-2h5v-5h2z"
              />
            </svg>
          </button>
        </div>
      </div>
    `);
  });
});
