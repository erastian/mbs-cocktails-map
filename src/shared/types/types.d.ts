export interface IIngredient {
  ingredient: string,
  measure: string,
}

export interface ICocktail {
  id: string,
  name: string,
  category: string,
  alcoholic: string,
  glass: string,
  instructions: string,
  image: string,
  ingredients: IIngredient[],
}

export interface ICocktailStoreState {
  cocktails: Record<string, ICocktail[]>,
  isLoading: boolean,
  burgerIsOpen: boolean,
}

export interface IRawCocktailData {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  strInstructionsZH_HANS: string | null;
  strInstructionsZH_HANT: string | null;
  strDrinkThumb: string;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
  [key: string]: string;
}
