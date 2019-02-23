import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
// tslint:disable-next-line:max-line-length
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RouterModule } from '@angular/router';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { FormsModule } from '@angular/forms';
import { DialogOverviewExampleComponent, DialogOverviewExampleDialogComponent } from './recipes-detail/recipes-detail-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModuleModule,
    FormsModule
  ],
  declarations: [
    RecipesListComponent,
    RecipesDetailComponent,
    DialogOverviewExampleComponent,
    DialogOverviewExampleDialogComponent
  ],
  exports: [
    RecipesListComponent,
    RecipesDetailComponent,
    DialogOverviewExampleComponent,
    DialogOverviewExampleDialogComponent
  ],
  entryComponents: [DialogOverviewExampleComponent, DialogOverviewExampleDialogComponent],
})
export class RecipesModule { }
