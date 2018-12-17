import {Recipe} from './recipes.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
    
    recipeSelected = new  EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pizza',
                    'Great Pizze to evening',
                    'http://www.pngall.com/wp-content/uploads/2016/05/Pizza-Free-PNG-Image.png',
                    [new Ingredient("cheeze",20),new Ingredient("dough",1)]),
        new Recipe('Schnitzel'
                    ,'Big Schnitzel for dinner',
                    'http://pngimg.com/uploads/schnitzel/schnitzel_PNG7.png',
                    [new Ingredient("Schnitzel",1),new Ingredient("Chips",20)]),
        new Recipe('Burger'
                   ,'Big Burger for dinner',
                    'http://www.pngmart.com/files/1/Healthy-Burger-PNG.png',
                     [new Ingredient("Buns",1),new Ingredient("Meat",1)]),
      ];
      
    getRecipes(){
        return this.recipes.slice();
    }  
}