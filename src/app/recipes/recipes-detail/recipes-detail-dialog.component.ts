import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';

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
    recipesLists: any;
    isLoading = true;

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
        private apiService: ApiService
    ) { }

    ngOnInit() {
        // this.recipesLists$ = this.apiService.getListsOfRecipes();
        this.apiService.getListsOfRecipes().subscribe(res => {
            if (!res.length) {
                this.isLoading = false;
                this.recipesLists = null;
            } else {
                this.isLoading = false;
                this.recipesLists = res;
            }
        });
    }

}
