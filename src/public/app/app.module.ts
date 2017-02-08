import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ItemsListComponent} from "./items-list.component";
import {ItemComponent} from "./item.componenet";
import {ItemAdderComponent} from "./item-adder.componenet";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
      AppComponent,
      ItemsListComponent,
      ItemComponent,
      ItemAdderComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
