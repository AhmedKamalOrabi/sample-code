import React from 'react';
import { Row, Col } from '../../components/Grid';
import { Flex, Box, Loader } from '../../components';
import RecipeCard from './RecipeCard';
import PriceInfo from './PriceInfo';
import { parseRawPrice } from './price';
import useFetchHelloFreshBox from '../../hooks/useFetchHelloFreshBox';
import { IRecipe, ISummary } from '../../interfaces';

const Recipes: React.FC = () => {
  // This state stores the array of recipes with the changes performed by the customer.
  const [recipes, setRecipes] = React.useState<IRecipe[]>([]);
  const { data: box, loading } = useFetchHelloFreshBox();

  // add/remove recipe, feel free to remove or rename these these variables and values.

  const handleUpdateSelectedRecipe = (recipeId: string, action: 'add' | 'remove') => {
    const selectedRecipeIndex = recipes.findIndex((recipe) => recipe.id === recipeId);
    if (selectedRecipeIndex > -1) {
      const clonedRecipes = [...recipes];
      const updatedRecipe = { ...clonedRecipes[selectedRecipeIndex] };
      if (action === 'add') {
        updatedRecipe.selected += 1;
      } else if (action === 'remove') {
        updatedRecipe.selected -= 1;
      } else {
        throw new Error(`This ${action} can not perform`);
      }
      setRecipes([
        ...clonedRecipes.slice(0, selectedRecipeIndex),
        updatedRecipe,
        ...clonedRecipes.slice(selectedRecipeIndex + 1),
      ]);
    } else {
      throw new Error(`This ${recipeId} does not exist`);
    }
  };

  const handleAddRecipe = (recipeId: string) => {
    handleUpdateSelectedRecipe(recipeId, 'add');
  };
  const handleRemoveRecipe = (recipeId: string) => {
    handleUpdateSelectedRecipe(recipeId, 'remove');
  };

  const totalSelectedRecipes = recipes.reduce(
    (totalSelectedRecipesCount, recipe) => (totalSelectedRecipesCount += recipe.selected),
    0
  );

  // min/max recipe boundaries, feel free to remove or rename these variables and values.
  const minRecipesSelected = totalSelectedRecipes >= box.min;
  const maxRecipesSelected = totalSelectedRecipes === box.max;

  // price summary and total price, feel free to remove or rename these variables and values.
  const summary: ISummary[] = [
    ...recipes
      .filter((recipe) => recipe.selected > 0)
      .map(({ name, selected, extraCharge }) => ({
        chargeText: selected > 1 ? `${name} x ${selected}` : name,
        chargeValue: (box.baseRecipePrice + extraCharge) * selected,
      })),
    { chargeText: 'Shipping', chargeValue: box.shippingPrice },
  ];

  const totalPrice = parseRawPrice(summary.reduce((acc, recipe) => (acc += recipe.chargeValue), 0));

  React.useEffect(() => {
    const { recipes } = box;
    if (recipes) {
      setRecipes(recipes);
    }
  }, [setRecipes, box]);

  if (loading) {
    return <Loader open={loading} />;
  }

  return (
    <>
      <Row>
        <Col sm={6}>
          <h3 data-test-id="headline">{box.headline}</h3>
        </Col>
        <Col sm={6}>
          <Flex alignItems="center" justifyContent="flex-end">
            <Box textAlign="right" mr="xs">
              <h3 data-test-id="total-price">{totalPrice}</h3>
            </Box>
            <PriceInfo summary={summary} totalPrice={totalPrice} />
          </Flex>
        </Col>
      </Row>

      <Row data-test-id="recipe-list">
        {recipes.map((recipe) => (
          <Col sm={12} md={6} xl={4} key={recipe?.id}>
            <Box mb="md">
              <RecipeCard
                {...recipe}
                handleAddRecipe={handleAddRecipe}
                handleRemoveRecipe={handleRemoveRecipe}
                minRecipesSelected={minRecipesSelected}
                maxRecipesSelected={maxRecipesSelected}
              />
            </Box>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Recipes;
