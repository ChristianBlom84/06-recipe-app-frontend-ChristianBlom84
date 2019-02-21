import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class MaterialModuleModule { }
