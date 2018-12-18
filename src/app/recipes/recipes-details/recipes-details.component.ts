import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  constructor(private recipeService :RecipeService) { }
  @Input() recipe:Recipe;
  
  ngOnInit() { 

  }
  
  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

}
