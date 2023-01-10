import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AssetVsUtilizationWidgetElementModule} from './asset-vs-utilization-widget.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(AssetVsUtilizationWidgetElementModule)
    .catch(err => console.error(err));
