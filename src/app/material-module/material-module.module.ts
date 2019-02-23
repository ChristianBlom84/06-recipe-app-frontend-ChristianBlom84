import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})
export class MaterialModuleModule { }
