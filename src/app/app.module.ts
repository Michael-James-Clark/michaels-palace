import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthServiceService } from './services/auth-service.service';
import {CategoryServiceService} from './services/category-service.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NavComponent } from './nav/nav.component';
import {RouterModule, Routes} from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { LandingComponent } from './landing/landing.component';
import { ThreadComponent } from './thread/thread.component';

const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'category/:id', component: CategoryComponent},
  {path: 'register', component: UserLoginComponent},
  {path: 'thread/:id', component: ThreadComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    NavComponent,
    CategoriesComponent,
    CategoryComponent,
    LandingComponent,
    ThreadComponent,

  ],
  imports: [
    FlashMessagesModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthServiceService, CategoryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
