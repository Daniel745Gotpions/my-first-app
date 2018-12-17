import { Component, OnInit, ElementRef, ViewChild,EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService} from '../shopping-list.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild("amountInput") numberInputRef:ElementRef;
  @ViewChild("nameInput") nameInputRef:ElementRef;
  
  constructor(public shoppingListService:ShoppingListService) { }


  onAddedItem(){
   
    const nameValue = this.nameInputRef.nativeElement.value;
    const numberValue = this.numberInputRef.nativeElement.value;
    const newIngredien = new Ingredient(nameValue,numberValue);
    this.shoppingListService.addIngredient(newIngredien);
  }
  
  
  ngOnInit() {}

}
