import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { AfterViewInit, ViewChild } from '@angular/core';
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

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
      const dialogRef = this.dialog.open(ListsCreateDialogOpenComponent, {
          width: '250px',
          data: {listName: this.listName}
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log(result);
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
export class ListsCreateDialogOpenComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<ListsCreateDialogOpenComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      private apiService: ApiService
  ) { }

  ngOnInit() {
  }

}
