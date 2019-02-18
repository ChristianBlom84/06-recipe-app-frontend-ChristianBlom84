import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';
import { ListsDetailComponent } from './lists-detail/lists-detail.component';
import { RouterModule } from '@angular/router';
import { MaterialModuleModule } from '../material-module/material-module.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModuleModule
  ],
  declarations: [
    ListsComponent,
    ListsDetailComponent
  ],
  exports: [
    ListsComponent,
    ListsDetailComponent
  ]
})
export class ListsModule { }
