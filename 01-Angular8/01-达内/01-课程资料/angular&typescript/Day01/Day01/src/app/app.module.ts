import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 默认后缀是 ts
import { AppComponent } from './app.component';
// 引入组件所在的文件
import { Myc01Component } from './myc01/myc01.component';
import { Myc02Component } from './myc02/myc02.component';
import { Myc03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';
import { Myc05Component } from './myc05/myc05.component';

// 引入 form 模块, 才能进行双向绑定操作
import { FormsModule } from '@angular/forms';
import { Myc06Component } from './myc06/myc06.component';

// 修改配置文件之后, 最好重启服务器

@NgModule({
  // declarations: 此属性用于 注册组件
  declarations: [
    AppComponent,
    Myc01Component,
    Myc02Component,
    Myc03Component,
    Myc04Component,
    Myc05Component,
    Myc06Component,
  ],
  // imports: 此属性用于 注册模块
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
