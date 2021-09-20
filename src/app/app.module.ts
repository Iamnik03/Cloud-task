import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { ShowtaskComponent } from './showtask/showtask.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { EdittaskComponent } from './edittask/edittask.component';
// import { HttpClient } from '@angular/common/http';
// import { NgDragDropModule } from 'ng-drag-drop';
// import{NgDragDropModule}from 'ng'
@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    HeaderComponent,
    ServicesComponent,
    ShowtaskComponent,
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClient,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
