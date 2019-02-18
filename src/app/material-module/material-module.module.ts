import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule
  ],
  exports: [
    MatListModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class MaterialModuleModule { }
