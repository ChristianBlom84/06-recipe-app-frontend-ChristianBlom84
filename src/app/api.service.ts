import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  recipeList: Observable<[any]>;

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
}
