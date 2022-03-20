/*
 * @Author: liming
 * @Date: 2022-03-20 17:59:26
 * @LastEditTime: 2022-03-20 18:21:27
 * @FilePath: \01-达内\02-代码手敲\myngapp01\src\app\buy-count\buy-count.component.ts
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-count',
  templateUrl: './buy-count.component.html',
  styleUrls: ['./buy-count.component.less'],
})
export class BuyCountComponent {
  //class内部的成员属性
  count = 0;
  imgUrl = 'cat.jpg';
  //class内部的成员方法
  add() {
    this.count++;
  }
  reduce() {
    this.count--;
  }
}
