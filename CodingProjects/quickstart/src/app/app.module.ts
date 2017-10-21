import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import {HerodetailComponent} from "./herodetail.component";

@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations: [ AppComponent, HerodetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

