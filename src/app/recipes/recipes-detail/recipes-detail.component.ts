import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';
import { ViewChild } from '@angular/core';
import { DialogOverviewExampleComponent } from './recipes-detail-dialog.component';
import { JwtService } from '../../jwt.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {

  @ViewChild(DialogOverviewExampleComponent)
  recipeId: string;
  recipe: any;
  addedRecipe: Observable<[any]>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private jwtService: JwtService
  ) { }

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.apiService.getRecipe(this.recipeId).subscribe(value => {
      this.recipe = value;
    });
  }

  saveRecipeToList(listId: number) {
    this.apiService.addRecipeToList(listId, this.recipe.id, this.recipe.name).subscribe(response => {
      console.log(`${response} from save recipe`);
    });
  }

}
