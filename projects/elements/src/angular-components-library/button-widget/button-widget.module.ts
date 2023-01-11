import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {ButtonComponent, ButtonModule} from '../../../../angular-components-library/src/public-api';

@NgModule({
    imports: [BrowserModule, ButtonModule],
    entryComponents: [ButtonComponent],
})
export class ButtonWidgetElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, ButtonComponent, 'button-widget');
    }
}
