import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { tokenNotExpired} from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthServiceService {
  token: any;
  user: any;
  constructor(private $http:Http) { }
  
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.$http.post('http://localhost:3000/user/create-user', user, {headers: headers})
      .map(res => res.json());
  }
  loginUser(loginInfo){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.$http.post('http://localhost:3000/user/login-user', loginInfo, {headers: headers})
      .map(res => res.json());
  }
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;

  }
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.token = token;
  }
  replyToken(){
    return localStorage.getItem('id_token');
  }
  loggedIn(){
    return tokenNotExpired('id_token');
  }
  logout(){
    this.token = null;
    this.user = null;
    localStorage.clear();
  }
}
