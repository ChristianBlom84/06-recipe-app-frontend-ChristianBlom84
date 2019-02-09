import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RecipesListComponent,
    RecipesDetailComponent
  ],
  exports: [
    RecipesListComponent,
    RecipesDetailComponent
  ]
})
export class RecipesModule { }
