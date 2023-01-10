import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {AssetVsUtilizationWidgetModule, AssetVsUtilizationWidgetComponent} from '../../../../angular-components-library/src/public-api';

@NgModule({
    imports: [BrowserModule, AssetVsUtilizationWidgetModule],
    entryComponents: [AssetVsUtilizationWidgetComponent],
})
export class AssetVsUtilizationWidgetElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, AssetVsUtilizationWidgetComponent, 'asset-vs-utilization-widget');
    }
}
