import { Component, OnInit, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild("amountInput") nameInputRef:ElementRef;
  @ViewChild("nameInput") numberInputRef:ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  onAddedItem(){
    let nameValue = this.nameInputRef.nativeElement.value;
    let numberValue = this.numberInputRef.nativeElement.value;
    this.ingredientAdded.emit( new Ingredient(nameValue,numberValue));
  }

  ngOnInit() {}

}
