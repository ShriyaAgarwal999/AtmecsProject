import { Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe:Recipe;
  id:number;

  constructor(
  private recipesService:RecipesService,
  private route:ActivatedRoute) {

   }

  ngOnInit() {

    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.recipe=this.recipesService.getRecipes(this.id);
});
  }

}
