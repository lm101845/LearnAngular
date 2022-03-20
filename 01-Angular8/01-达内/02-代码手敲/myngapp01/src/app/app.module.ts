import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyC01Component } from './myc01';
import { MyC02Component } from './myc02.component';
import {MyC03Component} from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';
import { Myc05Component } from './myc05/myc05.component';
import { BuyCountComponent } from './buy-count/buy-count.component';


@NgModule({
  //宣言有哪些组件——官宣
    declarations: [
        AppComponent,
        MyC01Component,
        MyC02Component,
        MyC03Component,
        Myc04Component,
        Myc05Component,
        BuyCountComponent,
    ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  //appModule又引导启动了AppComponent一个组件(主组件)
})
export class AppModule {}
