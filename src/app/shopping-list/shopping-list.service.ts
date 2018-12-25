import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    
    private ingredients:Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Tomatos',10),
    ];
    
    getIngredient(){
        return this.ingredients.slice();
    }
    
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
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
                this.ingredientsChanged.next(this.ingredients.slice());
            }
        } 
       
    }
}