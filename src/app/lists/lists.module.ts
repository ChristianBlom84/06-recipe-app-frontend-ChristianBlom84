import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';
import { ListsDetailComponent } from './lists-detail/lists-detail.component';
import { RouterModule } from '@angular/router';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { ListsCreateDialogComponent, ListsCreateDialogOpenComponent } from './lists/lists-create-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListsComponent,
    ListsDetailComponent,
    ListsCreateDialogComponent,
    ListsCreateDialogOpenComponent
  ],
  exports: [
    ListsComponent,
    ListsDetailComponent,
    ListsCreateDialogComponent,
    ListsCreateDialogOpenComponent
  ],
  entryComponents: [
    ListsCreateDialogComponent,
    ListsCreateDialogOpenComponent
  ]
})
export class ListsModule { }
