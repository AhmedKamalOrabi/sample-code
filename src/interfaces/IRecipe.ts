export interface IRecipe {
  id: string;
  name: string;
  slug: string;
  headline: string;
  image: string;
  selected: number;
  selectionLimit: number;
  extraCharge: number;
  yields: number;
}
