import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Box, Text } from '../../components';
import { UnselectedRecipeFooter } from './UnselectedRecipeFooter';
import { SelectedRecipeFooter } from './SelectedRecipeFooter';

interface RecipeCardProps {
  extraCharge: number;
  handleAddRecipe: (recipeId: string) => void;
  handleRemoveRecipe: (recipeId: string) => void;
  headline: string;
  id: string;
  image: string;
  maxRecipesSelected: boolean;
  minRecipesSelected: boolean;
  name: string;
  selected: number;
  selectionLimit: number;
  yields: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  extraCharge,
  handleAddRecipe,
  handleRemoveRecipe,
  headline,
  id,
  image,
  maxRecipesSelected,
  minRecipesSelected,
  name,
  selected,
  selectionLimit,
  yields,
}) => (
  <Box
    data-test-id={`recipe-card-${id}`}
    borderWidth={selected ? 'md' : null}
    borderStyle={selected ? 'solid' : null}
    borderColor={selected ? 'primary_600' : null}
    m={selected ? '-2px' : null}
    borderRadius="md"
    boxShadow="lg">
    <Box borderRadius="2px 2px 0px 0px" paddingBottom="56.25%" overflow="hidden" height="0">
      <LazyLoadImage alt={name} src={image} width="100%" />
    </Box>

    <Box p="xs" height="120px">
      <Text data-test-id="recipe-name" fontWeight="bold" fontFamily="primary" fontSize="md">
        {name}
      </Text>
      <Text
        data-test-id="recipe-headline"
        fontWeight="regular"
        fontFamily="secondary"
        fontSize="sm">
        {headline}
      </Text>
    </Box>
    {selected ? (
      <SelectedRecipeFooter
        recipeId={id}
        yields={yields}
        selected={selected}
        selectionLimit={selectionLimit}
        maxRecipesSelected={maxRecipesSelected}
        handleAddRecipe={handleAddRecipe}
        handleRemoveRecipe={handleRemoveRecipe}
      />
    ) : (
      <UnselectedRecipeFooter
        recipeId={id}
        price={extraCharge && extraCharge}
        selected={selected}
        minRecipesSelected={minRecipesSelected}
        maxRecipesSelected={maxRecipesSelected}
        handleAddRecipe={handleAddRecipe}
        handleRemoveRecipe={handleRemoveRecipe}
      />
    )}
  </Box>
);

export default RecipeCard;
