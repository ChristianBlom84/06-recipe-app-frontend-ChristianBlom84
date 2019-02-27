import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Observable, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms'
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes$: Subscription;
  recipeList: object;
  form: FormGroup;
  params = [
    { param: "&allowedAllergy[]=396^Dairy-Free", name: 'Dairy Free'},
    { param: "&allowedAllergy[]=397^Egg-Free", name: 'Egg Free'},
    { param: "&allowedAllergy[]=393^Gluten-Free", name: 'Gluten Free'},
    { param: "&allowedAllergy[]=394^Peanut-Free", name: 'Peanut Free'},
    { param: "&allowedAllergy[]=398^Seafood-Free", name: 'Seafood Free'},
    { param: "&allowedAllergy[]=399^Sesame-Free", name: 'Sesame Free'},
    { param: "&allowedAllergy[]=400^Soy-Free", name: 'Soy Free'},
    { param: "&allowedAllergy[]=401^Sulfite-Free", name: 'Sulfite Free'},
    { param: "&allowedAllergy[]=395^Tree+Nut-Free", name: 'Tree Nut Free'},
    { param: "&allowedAllergy[]=392^Wheat-Free", name: 'Wheat Free'},
    { param: "&allowedDiet=387^Lacto-ovo+vegetarian", name: 'Lacto-ovo Vegetarian'},
    { param: "&allowedDiet=386^Vegan", name: 'Vegan'},
    { param: "&allowedDiet=389^Ovo+vegetarian", name: 'Ovo Vegetarian'},
    { param: "&allowedDiet=390^Pescetarian", name: 'Pescetarian'},
    { param: "&allowedDiet=408^Low+FODMAP", name: 'Low + FODMAP'},
    { param: "&allowedDiet=388^Lacto+vegetarian", name: 'Lacto Vegetarian'},
    { param: "&allowedDiet=406^Ketogenic", name: 'Ketogenic'},
    { param: "&allowedCourse[]=course^course-Appetizers", name: 'Appetizers'},
    { param: "&allowedCourse[]=course^course-Main Dishes", name: 'Main Dishes'},
    { param: "&allowedCourse[]=course^course-Desserts", name: 'Desserts'},
    
  ];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 25, 50, 100];

  pageEvent: PageEvent;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) { }

  private addCheckboxes() {
    this.params.map((o, i) => {
      const control = new FormControl();
      (this.form.controls.params as FormArray).push(control);
    });
  }

  ngOnInit() {
    // this.showAll();
    // this.apiService.getRecipeList().subscribe(value => {
    //   console.log(value);
    // });
    this.form = this.formBuilder.group({
      params: new FormArray([])
    });

    this.addCheckboxes();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  showAll() {
    this.apiService.searchRecipe('');
  }

  searchRecipe = (searchString: string) => {
    searchString = 'q=' + searchString.trim().split(' ').join('+');
    console.log(searchString);
    this.apiService.searchRecipe(searchString).subscribe(recipes => {
      this.recipeList = recipes;
    });
  }

  getRecipeList() {
    return this.apiService.getRecipeList();
  }

  submit(searchString: string) {
    const selectedParams = this.form.value.params
      .map((v, i) => v ? this.params[i].param : null)
      .filter(v => v !== null);
    searchString = 'q=' + searchString.trim().split(' ').join('+');

    this.apiService.searchRecipe(searchString, selectedParams).subscribe(recipes => {
      this.recipeList = recipes;
      console.log(this.recipeList);
    });

  }

}
