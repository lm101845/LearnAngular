//装饰器(Decorator)——用于指定class的用途
//装饰器的本质就是一个函数，用于指定class用途，函数运行后面要加小括号

//组件=模板 + 脚本 + 样式
//组件要被使用必须要有名字，名字是唯一的，可以是任意字符串，但是要注意，组件名字要和组件文件名字一致
import { Component } from '@angular/core';
@Component({
    template: `
    <h2>
        我的组件C01
    </h2>
    <!-- <hr>
    <app-myc02></app-myc02> -->
        `,
    selector: 'myc01'  //组件当成元素来用，不用加中括号，如果加中括号就变成属性了，如果加了点，就当成类来用了
})
export class MyC01Component { }

//在Angular里面，允许你把模板，脚本，样式写在一个文件里面(如myc01.ts)
//也允许你把模板，脚本，样式写在三个不同的文件里面(如myc02.component.html,myc02.component.less,myc02.component.ts)
//而Vue.js里面只能有一个.vue文件，里面写上模板，脚本和样式
