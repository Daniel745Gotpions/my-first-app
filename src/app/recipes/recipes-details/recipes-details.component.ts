import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import {RecipeService} from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  constructor(private recipeService :RecipeService,
    private route:ActivatedRoute) { }
  
  recipe:Recipe;
  id:number;  
  ngOnInit() { 
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }
  
  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

}
