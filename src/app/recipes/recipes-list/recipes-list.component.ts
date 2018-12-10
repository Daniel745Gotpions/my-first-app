import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('recipe name','simple recipe example','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('recipe name 2','simple recipe example','https://www.seriouseats.com/recipes/images/2017/06/20170627-summer-nachos-matt-clifton-1-1500x1125.jpg'),
  ];
  constructor() { }
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  ngOnInit() {
  }
  onRecipeSelected(item:Recipe){
    
    this.recipeWasSelected.emit(item);
  }
}
