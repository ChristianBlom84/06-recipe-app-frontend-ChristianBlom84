import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  recipeList: Observable<[any]>;
  listsOfRecipes: Observable<[any]>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public searchRecipe(searchString: string): void {
    this.recipeList = this.http.get<any>(`${environment.yummlySearch}${searchString}`);
    this.router.navigateByUrl('');
  }

  public getRecipe(recipeId: string): Observable<[any]> {
    return this.http.get<[any]>(`${environment.yummlyRecipe}/${recipeId}`);
  }

  public getRecipeList(): Observable<[any]> {
    return this.recipeList;
  }

  public getListsOfRecipes(): Observable<[any]> {
    this.listsOfRecipes = this.http.get<any>(`${environment.yummlyBaseUrl}/lists`);
    return this.listsOfRecipes;
  }

  public getOneListOfRecipes(listId: number): Observable<{any}> {
    return this.http.get<any>(`${environment.yummlyBaseUrl}/lists/${listId}`);
  }
}
