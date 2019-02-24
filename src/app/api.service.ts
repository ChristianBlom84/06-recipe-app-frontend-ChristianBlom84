import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  recipeList: Observable<[any]>;
  recipeListSubject = new Subject<any>();
  listsOfRecipes: Observable<[any]>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public searchRecipe(searchString: string): Observable<[any]> {
    this.recipeList = this.http.get<any>(`${environment.yummlySearch}${searchString}`);
    return this.recipeList;
  }

  public getRecipe(recipeId: string): Observable<[any]> {
    return this.http.get<[any]>(`${environment.yummlyRecipe}/${recipeId}${environment.yummlyAppIdKey}`);
  }

  public getRecipeList(): Observable<[any]> {
    return this.recipeListSubject.asObservable();
  }

  public getListsOfRecipes(): Observable<[any]> {
    this.listsOfRecipes = this.http.get<any>(`${environment.laravelBaseUrl}/recipe_lists`);
    return this.listsOfRecipes;
  }

  public getOneListOfRecipes(listId: number): Observable<{any}> {
    return this.http.get<any>(`${environment.laravelBaseUrl}/recipe_lists/${listId}`);
  }

  public deleteListOfRecipes(listId: number): Observable<any> {
    return this.http.delete<any>(`${environment.laravelBaseUrl}/recipe_lists/${listId}`);
  }

  // tslint:disable-next-line:variable-name
  public addRecipeToList(listId: number, recipe_id: string, recipe_name: string): Observable<[any]> {
    return this.http.post<any>(`${environment.laravelBaseUrl}/recipe_lists/${listId}`, {recipe_id, recipe_name});
  }

  public createList(title: string) {
    return this.http.post<any>(`${environment.laravelBaseUrl}/recipe_lists`, {title});
  }
}
