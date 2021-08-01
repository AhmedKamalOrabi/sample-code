import React from 'react';
import { Flex, Box, Text } from '../../components';
import { SelectionButton } from '../../styles';
import IconMinusCircle from '../../icons/IconMinusCircle';
import IconPlusCircle from '../../icons/IconPlusCircle';

interface SelectedRecipeFooterProps {
  recipeId: string;
  selected: number;
  selectionLimit: number;
  yields: number;
  maxRecipesSelected: boolean;
  handleAddRecipe: (recipeId: string) => void;
  handleRemoveRecipe: (recipeId: string) => void;
}

export const SelectedRecipeFooter: React.FC<SelectedRecipeFooterProps> = ({
  yields,
  handleAddRecipe,
  handleRemoveRecipe,
  maxRecipesSelected,
  selectionLimit,
  selected,
  recipeId,
}) => (
  <Flex
    data-test-id="selected-recipe-footer"
    backgroundColor="primary_600"
    justifyContent="space-between"
    alignItems="center">
    <SelectionButton onClick={() => handleRemoveRecipe(recipeId)} title="Decrease quantity">
      <IconMinusCircle />
    </SelectionButton>
    <Box color="white">
      <Text
        data-test-id="selected-in-box"
        textAlign="center"
        fontWeight="bold"
        fontFamily="secondary"
        fontSize="md">
        {selected} in your box
      </Text>
      <Text
        data-test-id="selected-of-servings"
        textAlign="center"
        fontFamily="secondary"
        fontSize="sm">
        ({selected * yields} servings)
      </Text>
    </Box>
    <SelectionButton
      onClick={() => handleAddRecipe(recipeId)}
      title="Increase quantity"
      disabled={maxRecipesSelected || selected === selectionLimit}>
      <IconPlusCircle />
    </SelectionButton>
  </Flex>
);
