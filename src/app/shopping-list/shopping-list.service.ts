import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients:Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Tomatos',10),
    ];
    
    deleteIngredient(index){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredientByIndex(index:number){
        return this.ingredients[index];
    }
    editIngredient(index,ingredient:Ingredient){
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
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