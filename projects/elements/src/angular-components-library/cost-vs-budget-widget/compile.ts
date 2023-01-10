import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {CostVsBudgetWidgetElementModule} from './cost-vs-budget-widget.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(CostVsBudgetWidgetElementModule)
    .catch(err => console.error(err));
