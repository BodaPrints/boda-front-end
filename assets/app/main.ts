import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "./app.module";

import '../../public/stylesheets/styles.scss';

platformBrowserDynamic().bootstrapModule(AppModule);