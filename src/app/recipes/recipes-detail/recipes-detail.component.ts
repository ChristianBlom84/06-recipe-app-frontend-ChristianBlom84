import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {

  recipeId: string;
  recipe: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.recipe = this.apiService.getRecipe(this.recipeId);
    this.recipe.subscribe(val => {
      console.log(val);
    });
  }

}
