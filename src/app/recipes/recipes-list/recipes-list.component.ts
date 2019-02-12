import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes$: Observable<[any]>;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  showAll() {
    this.apiService.searchRecipe('');
  }

  searchRecipe = (searchString: string) => {
    console.log(searchString);
    this.apiService.searchRecipe(searchString);
    this.recipes$ = this.apiService.getRecipeList();
    console.log(this.recipes$);
  }

}
