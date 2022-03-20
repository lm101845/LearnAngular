import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc06',
  templateUrl: './myc06.component.html',
  styleUrls: ['./myc06.component.css'],
})
export class Myc06Component implements OnInit {
  count = 5;

  doAdd() {
    this.count++;

    // 面向对象中的this: 本质就是一个标识
    // this.xxx 就代表 xxx 是成员属性
    // xxx 就代表 xxx 是局部变量
  }

  show() {
    alert(123);
  }

  constructor() {}

  ngOnInit(): void {}
}
