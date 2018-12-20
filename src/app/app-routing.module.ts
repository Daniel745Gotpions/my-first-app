import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';

const AppRoutes : Routes = [
    { path:'', redirectTo:'/recipes', pathMatch:'full'},
    { path: 'recipes', component:RecipesComponent ,children:[
        {path:'',component:RecipesStartComponent},
        {path:':id',component:RecipesDetailsComponent},
    ]},
    { path: 'shopping-list', component:ShoppingListComponent },
];

@NgModule({
    imports:[RouterModule.forRoot(AppRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}