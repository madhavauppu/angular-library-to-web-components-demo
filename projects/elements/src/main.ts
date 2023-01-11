import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ButtonWidgetElementModule } from './angular-components-library/button-widget/button-widget.module';



enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(ButtonWidgetElementModule)
    .catch(err => console.error(err));
