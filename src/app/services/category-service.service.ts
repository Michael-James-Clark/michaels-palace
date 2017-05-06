import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { AuthServiceService} from './auth-service.service';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryServiceService {
  categories: Object;
  constructor(private $http: Http, private _authService: AuthServiceService) { }
  token: any;
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
  getThreadsByCategory(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.$http.get('http://localhost:3000/thread/get-threads-by-category?categoryid='+id, {headers: headers}).map(res => res.json());
  }
  createThread(threadData){
    let headers = new Headers();
    this.token = this._authService.replyToken();
    headers.append('Content-Type', 'application/json');
    headers.append('id_token', this.token);
    return this.$http.post('http://localhost:3000/thread/create-thread', threadData, {headers: headers}).map(res => res.json());
  }
  getLastFiveThreads(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.$http.get('http://localhost:3000/thread/get-threads', {headers: headers}).map(res => res.json());
  }
  getThread(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.$http.get('http://localhost:3000/thread/get-threads?thread=' + id, {headers: headers}).map(res => res.json());
  }
  getPostsByThread(id){
    let headers = new Headers();
    headers.append('Conent-Type', 'application/json');
    return this.$http.get('http://localhost:3000/post/get-posts-by-thread?threadId=' + id, {headers: headers}).map(res => res.json());
  }
  replyToComment(id, reply, threadid){
    let headers = new Headers();
    let url = 'http://localhost:3000/post/reply-to-comment?postid=' + id + '&threadid='+threadid;
    headers.append('Conent-Type', 'application/json');
    this.token = this._authService.replyToken();
    headers.append('id_token', this.token);
    return this.$http.post(url, reply, {headers: headers})
    .map(res => res.json());
  }
  replyToThread(reply){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.token = this._authService.replyToken();
    headers.append('id_token', this.token);
    return this.$http.post('http://localhost:3000/post/create-post', reply, {headers: headers}).map(res => res.json());
  }
}
  


