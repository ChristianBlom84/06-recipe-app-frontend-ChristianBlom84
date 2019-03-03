import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-lists-detail',
  templateUrl: './lists-detail.component.html',
  styleUrls: ['./lists-detail.component.scss']
})
export class ListsDetailComponent implements OnInit {
  recipeList: object;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.apiService.getOneListOfRecipes(+this.route.snapshot.paramMap.get('id')).subscribe(value => {
      this.recipeList = value;
    });
  }

  deleteRecipe(recipeListId: number, recipeId: string) {
    this.apiService.deleteRecipeFromList(recipeListId, recipeId).subscribe(response => {
      if (response !== 'deleted_recipe') {
        this.snackBar.open(response.status, 'X', {
          duration: 2000,
        });
      }
      this.ngOnInit();
    });
  }

}
