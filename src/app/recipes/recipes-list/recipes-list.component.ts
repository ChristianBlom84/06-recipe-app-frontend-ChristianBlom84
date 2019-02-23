import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes$: Subscription;
  recipeList: object;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    // this.showAll();
    // this.apiService.getRecipeList().subscribe(value => {
    //   console.log(value);
    // });
  }

  showAll() {
    this.apiService.searchRecipe('');
  }

  searchRecipe = (searchString: string) => {
    searchString = 'q=' + searchString.trim().split(' ').join('+');
    console.log(searchString);
    this.apiService.searchRecipe(searchString).subscribe(recipes => {
      this.recipeList = recipes;
    });
  }

  getRecipeList() {
    return this.apiService.getRecipeList();
  }

}
