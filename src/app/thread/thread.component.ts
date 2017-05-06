import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CategoryServiceService} from '../services/category-service.service';
import {AuthServiceService} from '../services/auth-service.service';
import {MdInputModule} from '@angular/material';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  thread_id: any;
  thread: any;
  posts: any;
  input: String;
  post: String;
  constructor(private _categoryService:CategoryServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe((params: Params) => {
      this.thread_id = params['id'];
    }); 
    this.getThreads();
    this.getPostsByThread();
    
  }
  getThreads(){
    this._categoryService.getThread(this.thread_id).subscribe(data => {
      this.thread = data.threads[0];
    });    
  }
  getPostsByThread(){
    this._categoryService.getPostsByThread(this.thread_id).subscribe(data => {
      this.posts = data.posts;
    });
  }
  postToThread(id){
    if(!this.post){
      return;
    }
    let reply = {
      threadId: id,
      body: this.post
    }
    this._categoryService.replyToThread(reply).subscribe(data => {
      this.posts.push(data);
    });

  }
  reply(postid){
    let replyInfo = {
      reply: this.input
    }
    this._categoryService.replyToComment(postid, replyInfo, this.thread_id).subscribe(data => {
      this.posts = data.posts;
    });

  }
}