import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService} from '../shopping-list.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  
  shoppingEditForm :FormGroup;
  editMode = false;
  editItemId:number;
  editedItem:Ingredient;
  constructor(public shoppingListService:ShoppingListService) { }
  subscription: Subscription;
  
  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index:number)=>{
        this.editMode = true;
        this.editItemId = index;
        this.editedItem = this.shoppingListService.getIngredientByIndex(index);
        // set values in input in our form
        this.shoppingEditForm.setValue({'name':this.editedItem.name,'amount':this.editedItem.amount});
      }
    );

    this.shoppingEditForm = new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(1,Validators.required)
    });
  }

  onAddItem(){

      if(this.shoppingEditForm.valid){
        const ingredient = new Ingredient(this.shoppingEditForm.value.name,this.shoppingEditForm.value.amount);
        if(this.editMode){
          this.shoppingListService.editIngredient(this.editItemId,ingredient)
        }else{
          this.shoppingListService.addIngredient(ingredient);
        }
        this.clearForm();
      }
  }
  
  onDeleteItem(){
    this.clearForm();
    this.shoppingListService.deleteIngredient(this.editItemId);
  }

  clearForm(){
    this.shoppingEditForm.reset();
    this.editMode = false;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
