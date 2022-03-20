import { Component } from '@angular/core';


//组件 = 模板  +  脚本  +  样式

//装饰器(Decorator)——用于指定class的用途
@Component({
  template: '<h2>我的组件C01</h2><hr>',
  selector: 'myc01'
})
export class MyC01Component {

}

/*
<div myTitle="xxx"></div>
<myc01></myc01>
<p class="myc01"></p>
*/