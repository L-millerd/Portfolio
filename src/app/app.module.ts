import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { BNavComponent } from './proj-butter/b-nav/b-nav.component';
import { ProductDetailsComponent } from './proj-butter/product-details/product-details.component';
import { AdminEditComponent } from './proj-butter/admin-edit/admin-edit.component';
import { AdminViewComponent } from './proj-butter/admin-view/admin-view.component';
import { BHomeComponent } from './proj-butter/b-home/b-home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    AboutComponent,
    BNavComponent,
    ProductDetailsComponent,
    AdminEditComponent,
    AdminViewComponent,
    BHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
