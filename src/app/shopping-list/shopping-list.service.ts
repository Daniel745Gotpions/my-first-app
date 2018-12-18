import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    
    private ingredients:Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Tomatos',10),
    ];
    
    
    getIngredient(){
        return this.ingredients.slice();
    }
    
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(newIngredients:Ingredient[]){

        for(let item of newIngredients){
            let itemExist = 0;
            
            for( let ingredient of this.ingredients){
                if(ingredient.name == item.name ){
                    itemExist = 1;    
                }
            }

            if(!itemExist){
                this.ingredients.push(item);
                this.ingredientsChanged.emit(this.ingredients.slice());
            }
        } 
       
    }
}