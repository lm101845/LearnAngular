// ng的组件由3个文件组成: html css ts
// 其中主文件是 ts,  ts文件引入html 和 css

// 安装了上午的插件(参考笔记), 就会有代码块

// ng-component
import { Component, OnInit } from '@angular/core';

// 1. 把 name 都改写成实际的组件名
@Component({
  selector: 'app-myc01',
  templateUrl: './myc01.component.html',
  // 2. 默认是 .scss  改成 css
  styleUrls: ['./myc01.component.css'],
})

// 面向对象写法: 类名要求大驼峰
// 组件在使用前 一定要注册: app.module.ts
export class Myc01Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

/**
 * ES6中导出和导入分两种写法,配对使用:
 *
 * export xxx         import {xxx} from ''
 * export default xxx   import xxx  from ''
 */
