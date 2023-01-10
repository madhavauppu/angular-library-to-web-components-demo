import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {CostVsBudgetWidgetElementModule} from './angular-components-library/cost-vs-budget-widget/cost-vs-budget-widget.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(CostVsBudgetWidgetElementModule)
    .catch(err => console.error(err));
