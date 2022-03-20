import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc04',
  templateUrl: './myc04.component.html',
  styleUrls: ['./myc04.component.css'],
})
export class Myc04Component implements OnInit {
  // 属性, 面向对象写法:   属性名=值;
  name = 'dongdong'; //字符串类型 string
  age = 33; //数字类型 number

  // 布尔类型 boolean
  married = true; //已婚

  // 数组类型 array
  teachers = ['东东', '亮亮', '然然', '小新', '华哥'];

  // 对象类型 object
  boss = {
    name: '文华',
    age: 35,
    phone: '10086',
  };

  constructor() {}

  ngOnInit(): void {}
}

// 注意面向对象写法 和 JS对象写法的差异

let obj = {
  name: '东东',
  age: 33,
};

class Obj {
  name = '东东';
  age = 33;
}
