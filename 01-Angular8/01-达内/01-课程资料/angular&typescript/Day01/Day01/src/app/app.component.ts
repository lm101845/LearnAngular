import { Component } from '@angular/core';

/**
 * 原生的HTML 如果分成3个文件:  则主文件是 html
 * 在html中通过 link方式引入css, 通过script 引入js
 *
 * 在ng中中, 也是3个文件, 但是主文件是: ts
 * 在ts中引入了 css 和 html
 */

@Component({
  // selector: 用于设定组件名,  查看index.html中就是 写的 <app-root></app-root>
  selector: 'app-hello',
  // templateUrl: 用来指定 对应html
  templateUrl: './app.component.html',
  // styleUrls: 引入css, 数组类型. 所以可以有多个css
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-app';
}
