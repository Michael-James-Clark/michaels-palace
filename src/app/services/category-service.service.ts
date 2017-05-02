import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryServiceService {
  categories: Object;
  constructor(private $http: Http) { }

  getCategories(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.$http.get('http://localhost:3000/category/get-categories', {headers: headers}).map(res => res.json());
  }
  getCategory(id){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.$http.get('http://localhost:3000/category/get-category?categoryid='+id, {headers: headers}).map(res => res.json());
  }

}
