import { Component, OnInit } from '@angular/core';
import { CategoryServiceService} from '../services/category-service.service';
import {AuthServiceService} from '../services/auth-service.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category_id: any;
  category: Object;
  threads: any;
  threadTitle: String;
  threadBody: String;
  constructor
  (
    private _categoryService:CategoryServiceService, 
    private activatedRoute: ActivatedRoute, 
    private _authService:AuthServiceService,
    private _flashMessages:FlashMessagesService
  ){ }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.category_id = params['id'];
      });    
      this.getCategories();
      this.getThreads();

  }
  getCategories(){
    this._categoryService.getCategory(this.category_id).subscribe(data => {
      this.category = data.category;
    });
  }
  getThreads(){
    this._categoryService.getThreadsByCategory(this.category_id).subscribe(data => {
      this.threads = data.threads;
    });
  }
  createThread(){
    if(!this.threadTitle || !this.threadBody){
      return this._flashMessages.show('Please fill in all fields!', { timeout: 5000 });;
    }
    let threadData = {
      categoryId:this.category_id,
      title: this.threadTitle,
      body: this.threadBody
    }
    this._categoryService.createThread(threadData).subscribe(data => {
      this.threads.push(data.thread);
      this._flashMessages.show('You have succesfully posted a thread!', {cssClass: 'flash-success', timeout: 5000 });
    });
  }

}
