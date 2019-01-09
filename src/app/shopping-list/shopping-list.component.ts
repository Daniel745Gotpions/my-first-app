import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients : Ingredient[];
  constructor( private slService :ShoppingListService ) { }
  private subscription:Subscription;

  ngOnInit() {
    // Set data on the first time the page lead
    this.ingredients = this.slService.getIngredient();
    
    // Render the array 
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredient:Ingredient[])=>{
        this.ingredients = ingredient;
      }
    );
  }
  onEditItem(itemId:number){
    this.slService.startedEditing.next(itemId);
    
  }
  // When html change destroy the compponent and build again  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
