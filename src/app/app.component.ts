import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { AfterViewInit, ViewChild } from '@angular/core';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(RecipesListComponent)
  private recipesList: RecipesListComponent;

  title = 'recipe-app-frontend-ChristianBlom';

  constructor(
    private apiService: ApiService,
  ) {}

  search(searchString: string) { return 0; }

  ngAfterViewInit() {
    this.search() = this.recipesList.searchRecipe;
  }
}
