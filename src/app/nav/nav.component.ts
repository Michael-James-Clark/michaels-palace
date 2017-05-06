import { Component, OnInit } from '@angular/core';
import { AuthServiceService} from '../services/auth-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _authService:AuthServiceService, private _flashMessages: FlashMessagesService) { }

  ngOnInit() {
  }
  logout(){
    this._authService.logout();
    this._flashMessages.show('You have logged out!', {cssClass: 'flash-success', timeout: 5000 });

  }

}
