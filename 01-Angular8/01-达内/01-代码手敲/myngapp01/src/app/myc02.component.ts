import { Component } from '@angular/core';
@Component({
  selector: 'app-myc02',
  //告诉页面编辑者这个不是html5标签，这个是自定义标签
  templateUrl: './myc02.component.html', //模板只能有一个
  //大型项目里面，一般不会像Vue一样，模板，样式和JS都是一个人写，而是写模板的就专门写模板，其他的都不管了，样式和JS也同理
  //所以这里只写一个模板路径，让别人写，我就只在这里写我自己的js就可以了
  styleUrls: ['./myc02.component.less'], //样式可以有多个
})

//下面的这个人脚本也只能有一个
export class MyC02Component {
  title = 'myc02';
}
