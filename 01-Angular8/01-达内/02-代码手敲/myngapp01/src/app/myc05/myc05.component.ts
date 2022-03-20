/*
 * @Author: liming
 * @Date: 2022-01-31 18:01:46
 * @LastEditTime: 2022-03-20 17:10:28
 * @FilePath: \01-达内\02-代码手敲\myngapp01\src\app\myc05\myc05.component.ts
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.less'],
})
export class Myc05Component {
  //MVVM:Model 模型数据
  uname = 'dingdang';
  //注意：class里面一律用等号，而不是冒号！！！后面用分号或不写，而不是等号
  age = 20;

  printUname() {
    console.log(this.age);
  }
}
