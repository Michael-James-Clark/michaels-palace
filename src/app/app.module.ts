import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
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
const appRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'category/:id', component: CategoryComponent},
  {path: 'register', component: UserLoginComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    NavComponent,
    CategoriesComponent,
    CategoryComponent,
    LandingComponent,

  ],
  imports: [
    FlashMessagesModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthServiceService, CategoryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
