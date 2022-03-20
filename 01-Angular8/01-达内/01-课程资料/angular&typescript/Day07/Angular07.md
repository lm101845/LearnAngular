# Angular07

**学子商城App** 制作

资源在FTP的 `angular/Day07/IonicProjectFiles.rar`



本阶段教学重点:  手机端App开发 和 实际开发能力

* 手机端App开发
  * 基于angular的ionic, 制作App
  * 基于React 的 ReactNative 制作App
* 实际开发能力
  * 书写项目的动手能力
  * 不会的内容的解决能力:  `面向百度编程`
  * 解决bug能力!



每个阶段的收尾项目: 

* 以前:  老师写, 你抄..
* 现在: 老师给思路, 你来写.   然后老师再写.   如果做不出来自己对比差异



## 登录页制作

<img src="https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200928153529140.png" alt="image-20200928153529140"  />

## 制作思路

1. 一个带有 tabs 导航的项目包

   ```
   ionic start xueziApp tabs
   
   生成过程中的询问, 都直接回车使用默认选项
   ```

2. 启动项目: `ionic s`

3. 制作第四个tab页

   ```
   默认是3个tab选项卡, 需要手动制作第4个
   
   ionic g page tab4
   ```

   * 配置tabs路由

   * 配置tabs的html页面, 按照效果图修改 icon 和 文字

     ```
     小图标网站: https://ionicons.com/
     ```

4. 制作 tab4 页面, 按照效果图进行

   * 注意, 左上角**返回按钮**不用做

5. 实现双向数据绑定,  在点击登录按钮时可以读取到输入框的值

   ```
   form模块默认在 tab4.module.ts 中被引入了,  不用手动引入
   ```

6. 登录接口:  **POST请求没有用过, 等讲**

   ```
   POST请求
   http://101.96.128.94:9999/data/user/login.php
   参数: uname 和 upwd
   ```

7. 登录成功后, 弹出提示,  告知登录结果

![image-20200928174858148](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200928174858148.png)

```typescript
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab4",
  templateUrl: "./tab4.page.html",
  styleUrls: ["./tab4.page.scss"],
})
export class Tab4Page implements OnInit {
  uname = "";
  upwd = "";

  // 网络模块注入 app.module.ts
  constructor(public http: HttpClient, public alertC: AlertController) {}

  ngOnInit() {}

  doLogin() {
    console.log(this.uname, this.upwd);

    // 正确: doudou  123456
    // post 和 get的最大差异 就是传参方式不同
    // GET: 参数和路径写一起 xxx.php?name=xxx&age=xxx
    // POST: 路径 和 参数要分开写
    let url = "http://101.96.128.94:9999/data/user/login.php";
    let body = `uname=${this.uname}&upwd=${this.upwd}`;

    // 此处需要告诉服务器我们的传参方式 是 字符串方式. 服务器才会按照字符串来读取
    // 参数的内容类型: application/json  application/x-www-form-urlencoded
    // 额外的配置项:

    // 官方说明: https://angular.cn/guide/http#adding-headers
    const httpOptions = {
      // HttpHeaders 必须通过代码提示回车显示, 才有自动引入;  具体见此文件最上方
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    };

    this.http.post(url, body, httpOptions).subscribe((res: Result) => {
      console.log(res);
      let code = res.code; //200成功

      if (code == 200) {
        this.alertC
          .create({ header: "恭喜, 登录成功", buttons: ["确定"] })
          .then((res) => res.present());
      } else {
        this.alertC
          .create({ header: "很遗憾, 登录失败!", buttons: ["确定"] })
          .then((res) => res.present());
      }
    });
  }
}

interface Result {
  code: number;
  msg: string;
}

```

```html
<ion-header>
  <ion-toolbar>
    <ion-title>用户登录</ion-title>
  </ion-toolbar>
</ion-header>

<!-- ion-padding: ionic官方提供的内边距样式 -->
<ion-content class="ion-padding">
  <ion-card>
    <ion-item>
      <ion-label>用户名:</ion-label>
      <ion-input [(ngModel)]="uname"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>密&nbsp;&nbsp;&nbsp;码:</ion-label>
      <ion-input type="password" [(ngModel)]="upwd"></ion-input>
    </ion-item>
  </ion-card>

  <ion-button expand="block" (click)="doLogin()">
    登录
  </ion-button>

  <h5>其它方式登录:</h5>
  <ion-button color="primary" fill="clear">
    <ion-icon name="logo-android"></ion-icon>
  </ion-button>

  <ion-button color="medium" fill="clear">
    <ion-icon name="logo-apple"></ion-icon>
  </ion-button>

  <ion-button color="secondary" fill="clear">
    <ion-icon name="logo-youtube"></ion-icon>
  </ion-button>

  <ion-button color="success" fill="clear">
    <ion-icon name="logo-html5"></ion-icon>
  </ion-button>

  <ion-button color="danger" fill="clear">
    <ion-icon name="logo-css3"></ion-icon>
  </ion-button>

  <ion-button color="warning" fill="clear">
    <ion-icon name="logo-javascript"></ion-icon>
  </ion-button>
</ion-content>

```



## 首页

GET请求
http://101.96.128.94:9999/data/product/index.php

制作流程: 

* logo地址: `http://101.96.128.94:9999/img/header/logo.png`
  * 通过插槽 slot属性嵌入到左侧
* 搜索栏是一个UI, 不需要实现实际功能
* 内容的请求: `http://101.96.128.94:9999/data/product/index.php`
* banner图展示: `ion-slides`  实现自动滚动 循环滚动 和 页数指示
  * 返回值中的图片地址是相对路径, 要添加域名前缀: `http://101.96.128.94:9999/`
* 两列布局: `ion-grid` 栅格布局
* 具体卡片中的内容需要配合css 来进行调整
* 点击**查看详情** 按钮, 需要跳转到详情页, 不需要传参!
  * 生成详情页: `ionic g page detail`
  * 详情页不用带 tabs 栏,  与效果图不同!
* 页面最下方的4个图标,  随意找4个icon即可

![1-index](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/1-index.jpg)



```typescript
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(public http: HttpClient) {}

  res: Result;
  baseURL = "http://101.96.128.94:9999/";

  ngOnInit(): void {
    let url = "http://101.96.128.94:9999/data/product/index.php";

    this.http.get(url).subscribe((res: Result) => {
      console.log(res);

      this.res = res;
    });
  }
}

interface Result {
  carouselItems: CarouselItem[];
  newArrivalItems: Item[];
  recommendedItems: Item[];
  topSaleItems: Item[];
}

interface CarouselItem {
  cid: string;
  href: string;
  img: string;
  title: string;
}

interface Item {
  details: string;
  href: string;
  pic: string;
  pid: string;
  price: string;
  title: string;
}

```

```html
<ion-header>
  <ion-toolbar>
    <img
      src="http://101.96.128.94:9999/img/header/logo.png"
      alt=""
      slot="start"
    />
    <ion-searchbar placeholder="Search"></ion-searchbar>
  </ion-toolbar>
</ion-header>

<ion-content *ngIf="res">
  <!-- disableOnInteraction: 当用户触摸滚动栏之后, 是否让自动滚动失效. 默认true -->
  <ion-slides
    pager
    [options]="{autoplay: {disableOnInteraction: false}, loop:true}"
  >
    <ion-slide *ngFor="let item of res.carouselItems" routerLink="/detail">
      <img [src]="baseURL+item.img" alt="" />
    </ion-slide>
  </ion-slides>

  <ion-item>
    <ion-icon name="desktop" slot="start"></ion-icon>
    <ion-label>首页推荐 / 1F</ion-label>
  </ion-item>

  <ion-grid fixed>
    <ion-row>
      <ion-col size="6" *ngFor="let item of res.recommendedItems">
        <ion-card style="margin: 0;">
          <img [src]="baseURL+item.pic" alt="" width="100%" />
          <div style="padding: 5px;">
            <div style="font-size: 1.2em; color: black;">{{item.title}}</div>
            <div style="margin: 5px 0;">{{item.details}}</div>
            <div style="color: red; font-size: 1.2em;">¥{{item.price}}</div>
            <ion-button routerLink="/detail">查看详情</ion-button>
          </div>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>

  <!-- 最新上架 -->
  <ion-item>
    <ion-icon name="desktop" slot="start"></ion-icon>
    <ion-label>最新上架 / 2F</ion-label>
  </ion-item>

  <ion-grid fixed>
    <ion-row>
      <ion-col size="6" *ngFor="let item of res.newArrivalItems">
        <ion-card style="margin: 0;">
          <img [src]="baseURL+item.pic" alt="" width="100%" />
          <div style="padding: 5px;">
            <div style="font-size: 1.2em; color: black;">{{item.title}}</div>
            <div style="margin: 5px 0;">{{item.details}}</div>
            <div style="color: red; font-size: 1.2em;">¥{{item.price}}</div>
            <ion-button routerLink="/detail">查看详情</ion-button>
          </div>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>

  <!-- 热销单品 -->
  <ion-item>
    <ion-icon name="desktop" slot="start"></ion-icon>
    <ion-label>热销单品 / 3F</ion-label>
  </ion-item>

  <ion-grid fixed>
    <ion-row>
      <ion-col size="6" *ngFor="let item of res.topSaleItems">
        <ion-card style="margin: 0;">
          <img [src]="baseURL+item.pic" alt="" width="100%" />
          <div style="padding: 5px;">
            <div style="font-size: 1.2em; color: black;">{{item.title}}</div>
            <div style="margin: 5px 0;">{{item.details}}</div>
            <div style="color: red; font-size: 1.2em;">¥{{item.price}}</div>
            <ion-button routerLink="/detail">查看详情</ion-button>
          </div>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>

  <div
    style="
      display: flex;
      justify-content: space-evenly;
      font-size: 3em;
      padding: 10px 0;
      color: lightgray;
    "
  >
    <ion-icon name="logo-apple"></ion-icon>
    <ion-icon name="logo-html5"></ion-icon>
    <ion-icon name="logo-css3"></ion-icon>
    <ion-icon name="logo-javascript"></ion-icon>
  </div>
</ion-content>

```

详情页

```typescript
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  constructor(public router: NavController) {}

  ngOnInit() {}
}

```

```html
<ion-header>
  <ion-toolbar>
    <ion-button
      (click)="router.back()"
      color="success"
      slot="start"
      fill="clear"
    >
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-button>
    <ion-title>商品详情</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content> </ion-content>

```



## Tab2 商品列表页

制作流程:

* 效果图的**返回按钮不需要**
* 搜索栏只是UI, 不需要功能
* 此页面需要 下拉刷新 和 加载更多两个功能.
* 不需要查看**详情按钮**
* 请求地址: `http://101.96.128.94:9999/data/product/list.php?pno=1`
  * 参数: pno代表页数
* 返回值的图片地址是相对路径, 需要拼接域名前缀: `http://101.96.128.94:9999/`
* 点击item之后, 可以跳转到详情页
  * 需要创建新的详情页: `ionic g page goodsDetail`
    * 系统会自动把小驼峰 改写成 中划线: `goods-detail`

![2-product-list](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/2-product-list.jpg)





```typescript
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  constructor(public http: HttpClient) {}

  // 下拉 加载更多 首次 都需要发送请求: url要复用
  url = "http://101.96.128.94:9999/data/product/list.php?pno=";
  baseURL = "http://101.96.128.94:9999/";

  res: Result;

  ngOnInit(): void {
    this.http.get(this.url + 1).subscribe((res: Result) => {
      console.log(res);
      this.res = res;
    });
  }

  loadData(e) {
    let nextP = this.res.pno + 1;

    this.http.get(this.url + nextP).subscribe((res: Result) => {
      console.log(res);

      res.data = this.res.data.concat(res.data);
      this.res = res;

      e.target.complete();
    });
  }

  doRefresh(e) {
    this.http.get(this.url + 1).subscribe((res: Result) => {
      console.log(res);

      this.res = res;
      e.target.complete();
    });
  }
}

interface Result {
  data: ResultData[];
  pageCount: number;
  pageSize: number;
  pno: number;
  recordCount: number;
}

interface ResultData {
  is_onsale: string;
  lid: string;
  pic: string;
  price: string;
  sold_count: string;
  title: string;
}

```



```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>产品详情</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content> </ion-content>

```



## 产品详情页

通过 **商品** 页面,  点击列表中的内容跳转到详情页

* 跳转需要参数

  ```
  [routerLink]="[路径, 参数对象]"
  ```

* 详情页 `goods-detail.xxx.xxx` 需要通过专门服务来接收路由参数

* 请求地址:  `http://101.96.128.94:9999/data/product/details.php?lid=8`

* 请求返回值中的 `detail` 是页面显示的数据项

* 图片的前缀域名:  `http://101.96.128.94:9999/`

* 网页内容要使用: `[innerHTML]` 进行显示

* **难点:**    返回值的html中的图片地址, 是相对路径.  需要通过正则替换方式 补全前缀域名才能显示!

* 效果图最下方的tabs栏不需要显示.

<img src="https://web1910-1301510526.cos.ap-beijing.myqcloud.com/3-product-detail.jpg" alt="3-product-detail" style="zoom:50%;" />

跳转操作

```html
 <!-- 系统自动把 小驼峰goodsDetail 改写成 goods-detail 方式 -->
  <ion-item
    button
    detail
    *ngFor="let item of res.data"
    [routerLink]="['/goods-detail', {lid: item.lid}]"
  >
    <img [src]="baseURL+ item.pic" alt="" style="width: 80px; height: 80px;" />
    <ion-label>
      <ion-label>{{item.title}}</ion-label>
      <div style="color: red;">¥{{item.price}}</div>
    </ion-label>
  </ion-item>
```





详情页面

```typescript
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-goods-detail",
  templateUrl: "./goods-detail.page.html",
  styleUrls: ["./goods-detail.page.scss"],
})
export class GoodsDetailPage implements OnInit {
  constructor(public route: ActivatedRoute, public http: HttpClient) {}

  res: Result;
  baseURL = "http://101.96.128.94:9999/";

  ngOnInit() {
    console.log(this.route);
    let lid = this.route.snapshot.params.lid;

    let url = "http://101.96.128.94:9999/data/product/details.php?lid=" + lid;

    this.http.get(url).subscribe((res: Result) => {
      console.log(res);

      this.res = res;
    });
  }

  // 自制html替换
  transHTML(html: string) {
    // src="img
    // src="http://101.96.128.94:9999/img
    return html.replace(/src="img/g, 'src="http://101.96.128.94:9999/img');

    //吴同学: let reg = /src="(.*?)">/igs
    // (): 捕获组, replace中用 $1 方式来使用捕获捕捉的值
    // . : 任意字符除了 \n
    // * : 0个以上
    // *?: 代表非贪婪匹配, 匹配最短符合条件的
    // 修饰符i: 忽略大小写
    // 修饰符g: 全局匹配
    // 修饰符s: 表达式的 . 是除了\n.  带s修饰符就是 带\n, 不排除
  }
}

interface Result {
  details: ResultDetails;
  family: any;
}

interface ResultDetails {
  category: string;
  cpu: string;
  details: string;
  disk: string;
  family_id: string;
  is_onsale: string;
  lid: string;
  lname: string;
  memory: string;
  os: string;
  picList: Pic[];
  price: string;
  promise: string;
  resolution: string;
  shelf_time: string;
  sold_count: string;
  spec: string;
  subtitle: string;
  title: string;
  video_card: string;
  video_memory: string;
}

interface Pic {
  laptop_id: string;
  lg: string;
  md: string;
  pid: string;
  sm: string;
}

```

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>产品详情</ion-title>

    <ion-button slot="end" fill="clear" color="dark">
      <ion-icon name="cart"></ion-icon>
    </ion-button>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding" *ngIf="res">
  <ion-item>
    <ion-label>产品型号: {{res.details.lname}}</ion-label>
  </ion-item>

  <ion-slides
    pager
    [options]="{loop:true, autoplay:{disableOnInteraction:false}}"
  >
    <ion-slide *ngFor="let item of res.details.picList">
      <img [src]="baseURL + item.lg" alt="" />
    </ion-slide>
  </ion-slides>

  <ion-card>
    <ion-card-header style="padding: 5px;">
      <ion-card-title>{{res.details.title}}</ion-card-title>
      <ion-card-subtitle>{{res.details.subtitle}}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content style="padding: 5px;">
      <ion-item>
        <ion-label color="danger">¥{{res.details.price}}</ion-label>
        <ion-button color="danger" slot="end">
          <ion-icon name="cart"></ion-icon>
          添加到购物车
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label>cpu:{{res.details.cpu}}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>内存:{{res.details.memory}}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>硬盘:{{res.details.disk}}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>系统:{{res.details.os}}</ion-label>
      </ion-item>
      <ion-item>
        <ion-text>承诺:{{res.details.promise}}</ion-text>
      </ion-item>
      <ion-item>
        <ion-label>显卡:{{res.details.video_card}}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>显存:{{res.details.video_memory}}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label
          >上市时间:{{res.details.shelf_time|date:'yyyy-MM-dd'}}</ion-label
        >
      </ion-item>

      <div [innerHTML]="transHTML(res.details.details)"></div>
    </ion-card-content>
  </ion-card>
</ion-content>

<!-- "<div class="content_tpl"> <div class="formwork">   <div class="formwork_img"><br></div><div class="formwork_img">    <img alt="" class="" src="img/product/detail/57b15612N81dc489d.jpg">   </div>  </div>  <div class="formwork">   <div class="formwork_img">    <img alt="" class="" src="//img20.360buyimg.com/vc/jfs/t2683/60/4222930118/169462/233c7678/57b15616N1e285f09.jpg">   </div>  </div>  <div class="formwork">   <div class="formwork_text">    技术规格请前往 www.apple.com/cn/macbook-air/specs.html 查看完整内容。</div></div></div>" -->

```



## 购物车页面

> POST请求 可以参考登录页面

请求方式: POST

接口地址: `http://101.96.128.94:9999/mfresh/data/cart_detail_select.php`

参数: `uid=423`

<img src="https://web1910-1301510526.cos.ap-beijing.myqcloud.com/4-cart.jpg" alt="4-cart"  />

```typescript
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  constructor(public http: HttpClient) {}

  res: Result;

  ngOnInit(): void {
    //POST:  地址 和参数分开
    let url = "http://101.96.128.94:9999/mfresh/data/cart_detail_select.php";
    let body = "uid=423";

    // 设置: 请求头
    let options = {
      // HttpHeaders 文件最上方有引入
      headers: new HttpHeaders({
        "content-type": "application/x-www-form-urlencoded",
      }),
    };

    this.http.post(url, body, options).subscribe((res: Result) => {
      console.log(res);

      this.res = res;
    });
  }
}

interface Result {
  products: ResultProduct[];
  uid: string;
}

interface ResultProduct {
  count: string;
  did: string;
  pic: string;
  pid: string;
  price: string;
  title1: string;
}

```



```html
<ion-header>
  <ion-toolbar>
    <ion-title>购物车</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content *ngIf="res" class="ion-padding">
  <ion-card style="margin: 0;">
    <ion-item *ngFor="let item of res.products">
      <ion-grid fixed>
        <ion-row>
          <ion-col size="12">
            <ion-label>{{item.title1}}</ion-label>
            <ion-text color="danger">¥{{item.price}}</ion-text>
          </ion-col>
          <ion-col size="12" style="display: flex; align-items: center;">
            <ion-button fill="clear" color="success">
              <ion-icon name="remove-circle-outline"> </ion-icon>
            </ion-button>
            <ion-text>{{item.count}} </ion-text>
            <ion-button fill="clear" color="success">
              <ion-icon name="add-circle-outline"></ion-icon>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
  </ion-card>

  <div style="display: flex; justify-content: flex-end;">
    <ion-button color="success">
      去结算
    </ion-button>
  </div>
</ion-content>

```





## 首页详情

首页的详情跳转

```typescript
<ion-button [routerLink]="['/detail', {href:item.href}]"
              >查看详情</ion-button
            >
```



详情页

```typescript
import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  constructor(
    public router: NavController,
    public route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  href: any;

  ngOnInit() {
    console.log(this.route);

    this.href = "http://101.96.128.94:9999/" + this.route.snapshot.params.href;

    // 对 href 进行处理后, 变为可信任的地址, 才能使用!
    this.href = this.sanitizer.bypassSecurityTrustResourceUrl(this.href);
  }
}

```



```html
<ion-header>
  <ion-toolbar>
    <ion-button
      (click)="router.back()"
      color="success"
      slot="start"
      fill="clear"
    >
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-button>
    <ion-title>商品详情</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <!-- html网页用 iframe -->
  <iframe [src]="href" frameborder="0" width="100%" height="100%"></iframe>
  <!-- 
    iframe 的 src 只能写静态地址;  动态变化的地址被认定为不安全的地址, 无法 访问

    Error: unsafe value used in a resource URL context
    解决办法: 百度上方报错即可
   -->
</ion-content>

```







## 关于项目编译

作为App软件,  最终是要运行在手机上. 则需要把项目打包成手机端的安装包, 例如 Android 的 apk.



项目打包apk的方式有两种

* 简单方式
  * ionic官方提供了打包服务
    * 步骤: 1. 登录:  `https://ionicframework.com/login`
    * 2. 按照官方指引, 上传代码包
      3. 使用官方build中提供的打包服务:   最低 `350元/月`
* 复杂方式
  * 需要在本地计算机搭建打包环境:
    * android:  大概下载 2G 的打包软件, 各种配置..
      * 在 ReactNative 阶段会讲解打包环境的具体搭建过程!
    * ios:  必须是 苹果电脑 才可以,  而且要`800元/年`的证书



## 安排

React基础:  `https://react.docschina.org/`

感兴趣, 可以提前预习入门教程;

或者

继续完成 学子商城 App



### windows编译环境资源

> 苹果电脑需要自己参考官方网站进行环境搭建: https://reactnative.cn/docs/getting-started.html

下载所有内容, 国庆后使用!

```
链接：https://pan.baidu.com/s/1PpEgNQ2iAeYK-_VHt-w7CA 
提取码：yweo 
复制这段内容后打开百度网盘手机App，操作更方便哦
```





