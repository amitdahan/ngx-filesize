import 'zone.js';
import 'core-js/es6/reflect';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DemoModule} from './demo.module';

platformBrowserDynamic().bootstrapModule(DemoModule);