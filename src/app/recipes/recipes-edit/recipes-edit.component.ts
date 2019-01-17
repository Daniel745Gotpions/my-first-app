import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {

  constructor(private route:ActivatedRoute,private recipeService:RecipeService) { }
  id :number;
  editMode:boolean = false;
  recpieFrom : FormGroup;

  private initForm(){
    let recipeName = '';
    let imagePath = '';
    let description = '';
    if(this.editMode){
      const recipes = this.recipeService.getRecipes();
      recipeName = recipes[this.id].name;
      imagePath = recipes[this.id].imagePath;
      description = recipes[this.id].description;
    }

    this.recpieFrom = new FormGroup({
      'name':new FormControl(recipeName),
      'imagePath':new FormControl(imagePath),
      'description':new FormControl(description)
    });
  }
  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }
  onSubmit(){
    console.log(this.recpieFrom);
  }
}
