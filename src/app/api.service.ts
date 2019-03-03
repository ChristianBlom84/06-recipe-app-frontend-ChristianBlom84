import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
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
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  private checkToken() {
    if (this.jwtHelper.isTokenExpired()) {
      localStorage.removeItem('access_token');
      this.router.navigateByUrl('/login');
    }
  }

  public searchRecipe(searchString: string, params?: []): Observable<[any]> {
    params.forEach(param => {
      searchString += param;
    });
    this.recipeList = this.http.get<any>(`${environment.yummlySearch}${searchString}&maxResult=200`);
    return this.recipeList;
  }

  public getRecipe(recipeId: string): Observable<[any]> {
    return this.http.get<[any]>(`${environment.yummlyRecipe}/${recipeId}${environment.yummlyAppIdKey}`);
  }

  public getRecipeList(): Observable<[any]> {
    return this.recipeListSubject.asObservable();
  }

  public getListsOfRecipes(): Observable<[any]> {
    this.checkToken();
    this.listsOfRecipes = this.http.get<any>(`${environment.laravelBaseUrl}/recipe_lists`);
    return this.listsOfRecipes;
  }

  public getOneListOfRecipes(listId: number): Observable<{any}> {
    this.checkToken();
    return this.http.get<any>(`${environment.laravelBaseUrl}/recipe_lists/${listId}`);
  }

  public deleteListOfRecipes(listId: number): Observable<any> {
    this.checkToken();
    return this.http.delete<any>(`${environment.laravelBaseUrl}/recipe_lists/${listId}`);
  }

  // tslint:disable-next-line:variable-name
  public addRecipeToList(listId: number, recipe_id: string, recipe_name: string): Observable<[any]> {
    this.checkToken();
    return this.http.post<any>(`${environment.laravelBaseUrl}/recipe_lists/${listId}`, {recipe_id, recipe_name});
  }

  public createList(title: string) {
    this.checkToken();
    return this.http.post<any>(`${environment.laravelBaseUrl}/recipe_lists`, {title});
  }

  public deleteRecipeFromList(listId: number, recipeId: string): Observable<any> {
    this.checkToken();
    return this.http.delete<any>(`${environment.laravelBaseUrl}/recipe_lists/${listId}/${recipeId}`);
  }
}
