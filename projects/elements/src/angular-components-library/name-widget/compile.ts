import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NameWidgetElementModule } from './name-widget.module';


enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(NameWidgetElementModule)
    .catch(err => console.error(err));
