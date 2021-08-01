import { IRecipe } from './IRecipe';

export interface IBox {
  id: string;
  productName: string;
  headline: string;
  min: number;
  max: number;
  baseRecipePrice: number;
  shippingPrice: number;
  recipes: IRecipe[];
}
