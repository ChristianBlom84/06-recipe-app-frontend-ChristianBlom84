import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public searchRecipe(searchString: string): Observable<[any]> {
    return this.http.get<any>(`${environment.yummlySearch}${searchString}`);
  }

  public getRecipe(recipeId: string): Observable<any> {
    return this.http.get<any>(`${environment.yummlyRecipe}/${recipeId}`);
  }
}
