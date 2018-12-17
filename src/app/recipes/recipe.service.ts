import {Recipe} from './recipes.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
    
    recipeSelected = new  EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('recipe name','simple recipe example','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
        new Recipe('recipe name 2','simple recipe example','https://www.seriouseats.com/recipes/images/2017/06/20170627-summer-nachos-matt-clifton-1-1500x1125.jpg'),
      ];

    getRecipes(){
        return this.recipes.slice();
    }  
}