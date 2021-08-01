import React from 'react';
import { RouteComponentProps } from '@reach/router';
import RecipesList from '../modules/recipes/RecipesList';
import { Container } from '../components/Grid';
import { Box } from '../components';
import { translate } from '../constants';

export const Recipes: React.FC<RouteComponentProps> = (): any => {
  return (
    <Container>
      <Box textAlign="center">
        <h1 data-test-id="recipe-title">{translate('recipe.title.text')}</h1>
        <p data-test-id="recipe-sub-title">{translate('recipe.subTitle.text')}</p>
      </Box>
      <RecipesList />
    </Container>
  );
};

export default Recipes;
