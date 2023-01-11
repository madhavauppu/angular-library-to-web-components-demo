import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {NameComponent, NameModule} from '../../../../angular-components-library/src/public-api';

@NgModule({
    imports: [BrowserModule, NameModule],
    entryComponents: [NameComponent],
})
export class NameWidgetElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, NameComponent, 'name-widget');
    }
}
