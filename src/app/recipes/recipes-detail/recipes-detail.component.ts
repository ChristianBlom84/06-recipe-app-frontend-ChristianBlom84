import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { AfterViewInit, ViewChild } from '@angular/core';
import { DialogOverviewExampleComponent } from './recipes-detail-dialog.component';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit, AfterViewInit {

  @ViewChild(DialogOverviewExampleComponent)
  private dialogComponent: DialogOverviewExampleComponent;
  recipeId: string;
  recipe: any;
  addedRecipe: Observable<[any]>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.apiService.getRecipe(this.recipeId).subscribe(value => {
      this.recipe = value;
    });
  }

  ngAfterViewInit() {
    // console.log(this.dialogComponent.dialog);
  }

  saveRecipeToList(listId: number) {
    this.apiService.addRecipeToList(listId, this.recipe.id, this.recipe.name).subscribe(response => {
      console.log(`${response} from save recipe`);
    });
  }

}
