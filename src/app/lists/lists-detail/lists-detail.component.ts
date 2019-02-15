import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lists-detail',
  templateUrl: './lists-detail.component.html',
  styleUrls: ['./lists-detail.component.scss']
})
export class ListsDetailComponent implements OnInit {
  recipeList: object;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.apiService.getOneListOfRecipes(+this.route.snapshot.paramMap.get('id')).subscribe(value => {
      this.recipeList = value;
    });
  }

}
