import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { ApiService } from './services/api.service';
import {ButtonModule, InputModule, NameModule, CostVsBudgetWidgetModule, AssetVsUtilizationWidgetModule} from 'projects/angular-components-library/src/public-api';
import {BadgeModule} from 'projects/another-angular-components-library/src/public-api';
import { ApiContractService } from '@cloudMatrix-CAM/cb-common-ui';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ButtonModule, BadgeModule, InputModule, NameModule, CostVsBudgetWidgetModule,
        AssetVsUtilizationWidgetModule],
    providers: [{
        provide: ApiContractService,
        useClass: ApiService
    }],
    bootstrap: [AppComponent],
})
export class AppModule {}
