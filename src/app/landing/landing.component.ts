import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from '../services/category-service.service';
import {AuthServiceService} from '../services/auth-service.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  threads: any;
  constructor(private _categoryService:CategoryServiceService, private _authService:AuthServiceService) { }

  ngOnInit() {
    this.getLastFiveThreads();
  }
  getLastFiveThreads(){
    this._categoryService.getLastFiveThreads().subscribe(data => {
      this.threads = data.threads;
    });
  }

}
