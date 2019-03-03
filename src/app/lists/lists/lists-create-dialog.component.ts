import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/recipes/recipes-detail/recipes-detail-dialog.component';

export interface DialogData {
  listName: string;
}

@Component({
  selector: 'app-lists-create-dialog',
  templateUrl: './lists-create-dialog.component.html',
  styles: [`
  #new-recipe {
    min-width: 0;
    line-height: 2rem;
    font-size: 2rem;
    }`
  ]
})
export class ListsCreateDialogComponent {

  listName: string;

  @Output() listCreated = new EventEmitter<number>();

  constructor(
    public dialog: MatDialog
    ) { }

  openDialog(): void {
      const dialogRef = this.dialog.open(ListsCreateDialogOpenComponent, {
          width: '250px'
      });

      dialogRef.afterClosed().subscribe(result => {
          this.listCreated.emit(result);
      });
  }

}

@Component({
  selector: 'app-lists-create-dialog-open',
  templateUrl: './lists-create-dialog-open.component.html',
  styles: [`
  #new-recipe {
    min-width: 0;
    line-height: 2rem;
    font-size: 2rem;
    }`
  ]
})
export class ListsCreateDialogOpenComponent {

  listName: string;

  constructor(
      public dialogRef: MatDialogRef<ListsCreateDialogOpenComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

}
