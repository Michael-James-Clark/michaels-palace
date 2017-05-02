import { Component, OnInit } from '@angular/core';
import { CategoryServiceService} from '../services/category-service.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category_id: any;
  category: Object;
  constructor(private _categoryService:CategoryServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.category_id = params['id'];
      });    
    this._categoryService.getCategory(this.category_id).subscribe(data => {
      this.category = data.category;
    });
  }

}
