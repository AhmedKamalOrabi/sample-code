import React from 'react';
import { Flex, Box, Text, Button } from '../../components';
import { parseRawPrice } from './price';

interface UnselectedRecipeFooterProps {
  price: number;
  recipeId: string;
  selected: number;
  minRecipesSelected: boolean;
  maxRecipesSelected: boolean;
  handleAddRecipe: (recipeId: string) => void;
  handleRemoveRecipe: (recipeId: string) => void;
}

export const UnselectedRecipeFooter: React.FC<UnselectedRecipeFooterProps> = ({
  price,
  handleAddRecipe,
  maxRecipesSelected,
  minRecipesSelected,
  recipeId,
}) => (
  <Flex data-test-id="unselected-recipe-footer" p="xs">
    <Box flex="50%" alignSelf="center">
      {price ? <Text color="primary_600">+{parseRawPrice(price)}</Text> : null}
    </Box>
    <Box flex="50%">
      <Button
        onClick={() => handleAddRecipe(recipeId)}
        variant="secondary"
        width="100%"
        p="0"
        disabled={maxRecipesSelected}>
        {minRecipesSelected ? 'Add extra meal' : 'Add'}
      </Button>
    </Box>
  </Flex>
);
