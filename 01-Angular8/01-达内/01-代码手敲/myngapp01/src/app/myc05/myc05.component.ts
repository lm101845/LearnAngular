import { Component } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.less']
})
export class Myc05Component {
    uname = 'dingdang';
    //注意：class里面一律用等号，而不是冒号！！！后面用分号或不写，而不是等号
    age = 20;
}
