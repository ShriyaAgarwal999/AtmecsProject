import {Ingredient} from '../shared/ingredient.model';
export class ShoppingListService{

private ingredients: Ingredient[]=[ new Ingredient('Apple',5),
new Ingredient('Tomato',2) ];

getIngredients()
{
  return this.ingredients;
}
addIngredient(ingredient:Ingredient)
{

    this.ingredients.push(ingredient);
}
}
