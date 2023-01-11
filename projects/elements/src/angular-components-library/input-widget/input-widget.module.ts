import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {InputComponent, InputModule} from '../../../../angular-components-library/src/public-api';

@NgModule({
    imports: [BrowserModule, InputModule],
    entryComponents: [InputComponent],
})
export class InputWidgetElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, InputComponent, 'input-widget');
    }
}
