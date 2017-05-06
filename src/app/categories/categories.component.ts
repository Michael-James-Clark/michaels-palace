import { Component, OnInit } from '@angular/core';
import { CategoryServiceService} from '../services/category-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any;
  constructor(private _categoryService: CategoryServiceService) { }

  ngOnInit() {
    this.getCategories();
   // get categories
   // put them in object
   // loop through object in html and create links for each category
  }
  getCategories(){
    this._categoryService.getCategories().subscribe(data => {
      this.categories = data.categories;
      console.log(this.categories);
    });
  }
}
