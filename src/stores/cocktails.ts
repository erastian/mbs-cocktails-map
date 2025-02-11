import { defineStore } from 'pinia';
import type {
  ICocktail,
  ICocktailStoreState,
  IIngredient,
  IRawCocktailData
} from '@/shared/types/types';

export const useCocktailsStore = defineStore('cocktailsStore', {
  state: (): ICocktailStoreState => ({
    cocktails: {},
    isLoading: true,
    burgerIsOpen: false,
  }),
  actions: {
    async fetchCocktails(cocktailNames: string[]) {
      const fetchedCocktails: Record<string, ICocktail[]> = {};

      for (const name of cocktailNames) {
        try {
          const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ name }`);
          const data = await response.json();

          if (data.drinks) {
            if (!fetchedCocktails[name]) {
              fetchedCocktails[name] = [];
            }

            data.drinks.forEach((drink: IRawCocktailData) => {
              const ingredients: IIngredient[] = [];

              for (let i = 1; i <= 15; i++) {
                const ingredientKey = `strIngredient${ i }`;
                const measureKey = `strMeasure${ i }`;

                const ingredient= drink[ingredientKey];
                const measure = drink[measureKey];

                if (ingredient && measure) {
                  ingredients.push({ ingredient, measure });
                }
              }

              fetchedCocktails[name].push({
                id: drink.idDrink,
                name: drink.strDrink,
                category: drink.strCategory,
                alcoholic: drink.strAlcoholic,
                glass: drink.strGlass,
                instructions: drink.strInstructions,
                image: drink.strDrinkThumb,
                ingredients
              })
            })
          }
        } catch (e) {
          console.error(`Error while fetching ${ name } data: `, e);
        }
      }

      this.cocktails = fetchedCocktails;
      this.isLoading = false;
    }
  }
})
