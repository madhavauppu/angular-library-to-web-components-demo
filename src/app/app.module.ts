import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonModule, InputModule, NameModule} from '../../projects/angular-components-library/src/public-api';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ButtonModule, InputModule, NameModule],
    providers:[],
    bootstrap: [AppComponent],
})
export class AppModule {}
