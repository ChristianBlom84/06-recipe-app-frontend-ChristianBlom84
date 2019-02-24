import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  recipesLists$: Observable<[any]>;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.recipesLists$ = this.apiService.getListsOfRecipes();
  }

  deleteList(id: number) {
    this.apiService.deleteListOfRecipes(id).subscribe(response => {
      console.log(response);
    });
    this.ngOnInit();
  }

  createList(title: string) {
    this.apiService.createList(title).subscribe(response => {
      console.log(response);
    });
    this.ngOnInit();
  }

}
