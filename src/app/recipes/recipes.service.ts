import { EventEmitter } from '@angular.core';
import { Recipe } from './recipe.model';

export class RecipesService{

recipeSelected=new EventEmitter<Recipe>();

 private recipes: Recipe[]=[new Recipe('Test recipe','This is the description','https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/17c6ec7292ce74c4f38c71ee4816925c46ffd4bf'),
new Recipe('Test recipe 2','This is the description for second recipe','https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/17c6ec7292ce74c4f38c71ee4816925c46ffd4bf')];

getRecipe(){
  return this.recipes.slice();
}
}

