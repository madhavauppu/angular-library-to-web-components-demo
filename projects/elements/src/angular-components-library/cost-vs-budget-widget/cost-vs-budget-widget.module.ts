import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {CostVsBudgetWidgetComponent, CostVsBudgetWidgetModule} from '../../../../angular-components-library/src/public-api';

@NgModule({
    imports: [BrowserModule, CostVsBudgetWidgetModule],
    entryComponents: [CostVsBudgetWidgetComponent],
})
export class CostVsBudgetWidgetElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, CostVsBudgetWidgetComponent, 'cost-vs-budget-widget');
    }
}
