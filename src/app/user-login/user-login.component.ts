import { Component, OnInit } from '@angular/core';
import { AuthServiceService} from '../services/auth-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  formState: String;
  username: String;
  email: String;
  password: String;
  login: String;
  constructor(private _authService:AuthServiceService, private _flash:FlashMessagesService, private router:Router){
    
  }
  ngOnInit() {
    this.formState = 'login';
  }


  changeFormState(newState){
    this.formState = newState;

  }
  getFormState(){
    return this.formState;
  }

  loginUser(){
    let loginInfo = {
      login: this.login,
      password: this.password
    }
    this._authService.loginUser(loginInfo).subscribe(data => {
      if(data.success)
      {
        this._authService.storeUserData(data.token, data.user);
        this._flash.show('You have succesfully logged in!', {cssClass: 'flash-success', timeout: 5000 });;
        this.router.navigate(['']);
      }

    });
  }

  register(){
    let user = {
      username: this.username,
      email: this.email,
      password: this.password
    }
    this._authService.registerUser(user).subscribe(data => {
      if(data.success){
        this._flash.show('You have succesfully registered an account', { cssClass: 'alert-success', timeout: 1000 });

      }
    });
  }

}