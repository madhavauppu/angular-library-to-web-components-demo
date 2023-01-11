import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { InputWidgetElementModule } from './input-widget.module';


enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(InputWidgetElementModule)
    .catch(err => console.error(err));
