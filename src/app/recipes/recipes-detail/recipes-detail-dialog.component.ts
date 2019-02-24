import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { AfterViewInit, ViewChild } from '@angular/core';

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'app-dialog-overview-example',
    templateUrl: 'recipes-detail-dialog-example.html',
})
export class DialogOverviewExampleComponent {

    @Output() recipeSaved = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
            width: '250px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            this.recipeSaved.emit(result);
        });
    }

}

@Component({
    selector: 'app-dialog-overview-example-dialog',
    templateUrl: 'recipes-detail-dialog.html',
})
export class DialogOverviewExampleDialogComponent implements OnInit {
    recipesLists$: Observable<[any]>;

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private apiService: ApiService
    ) { }

    ngOnInit() {
        this.recipesLists$ = this.apiService.getListsOfRecipes();
    }

}
