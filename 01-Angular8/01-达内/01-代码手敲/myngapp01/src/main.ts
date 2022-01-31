import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';  //.ts后缀可以省略
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//引导启动模块
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
//   bootstrap是引导启动的意思，Module是模块的意思
//  启动的时候引导了一个模块叫AppModule
