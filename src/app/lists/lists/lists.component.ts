import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  recipesLists$: Observable<[any]>;
  status = 'status';

  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.recipesLists$ = this.apiService.getListsOfRecipes();
    this.recipesLists$.subscribe(res => {
      if (res[this.status] === 'Token is Expired' || res[this.status] === 'Token is invalid') {
        localStorage.clear();
        this.router.navigateByUrl('/login');
      }
    });
  }

  deleteList(id: number) {
    this.apiService.deleteListOfRecipes(id).subscribe(response => {
      if (response[0] === 'deleted_list') {
        this.ngOnInit();
      } else {
        this.snackBar.open(response.status);
        this.router.navigateByUrl('/login');
      }
    });
  }

  createList(title: string) {
    this.apiService.createList(title).subscribe(response => {
      if (response) {
        this.ngOnInit();
      }
    });
  }

}
