import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css'],
})
export class Myc05Component implements OnInit {
  image =
    'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2066796227,20090082&fm=26&gp=0.jpg';

  show() {
    alert('事件触发!');
  }

  data = '<h1>Hello World!</h1>';

  name = 'dongdong';

  constructor() {}

  ngOnInit(): void {}
}
