import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes$: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.showAll();
    this.apiService.recipeList.subscribe(value => {
      this.recipes$ = value;
    });
  }

  showAll() {
    this.apiService.searchRecipe('');
  }

  searchRecipe = (searchString: string) => {
    console.log(searchString);
    this.apiService.searchRecipe(searchString);
    this.apiService.recipeList.subscribe(value => {
      this.recipes$ = value;
    });
    console.log(this.recipes$);
  }

  getRecipeList() {
    return this.apiService.getRecipeList();
  }

}
