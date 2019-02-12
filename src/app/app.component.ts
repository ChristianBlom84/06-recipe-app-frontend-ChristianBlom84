import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { AfterViewInit, ViewChild } from '@angular/core';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(RecipesListComponent)
  recipesList: RecipesListComponent;

  title = 'recipe-app-frontend-ChristianBlom';
  search(searchString: string) { }

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.apiService.searchRecipe('');
  }
}
