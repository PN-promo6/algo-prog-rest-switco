import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data-service/data.service'
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [
    DataService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
