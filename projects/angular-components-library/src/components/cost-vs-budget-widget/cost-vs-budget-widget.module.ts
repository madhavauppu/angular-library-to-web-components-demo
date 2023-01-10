/*
 #*===================================================================
 #*
 #* Licensed Materials - Property of IBM
 #* IBM Cloud Brokerage
 #* Copyright IBM Corporation 2018. All Rights Reserved.
 #*
 #*===================================================================
 */

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiContractService, CbCommonUiLibModule, CbTranslationUiLibModule, CustomCurrencyPipe, TranslationModule, TranslationService,
  AuthenticationContractService, FeatureToggleService } from '@cloudMatrix-CAM/cb-common-ui';
import { CostVsBudgetModule } from '@cloudMatrix-CAM/ecam-common-ui';
import { ContractService } from '../../services/contract.service';
import { RestApiServices } from '../../services/restapi.service';
import { CostVsBudgetWidgetComponent } from './cost-vs-budget-widget.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    TranslationModule,
    CostVsBudgetModule, 
    CbTranslationUiLibModule.forRoot(),
    CbCommonUiLibModule.forRoot(),

  ],
  declarations: [CostVsBudgetWidgetComponent],
  exports: [CostVsBudgetWidgetComponent],
  providers: [ 
    {
      provide: ApiContractService,
      useExisting: ContractService
    },
    AuthenticationContractService, RestApiServices,
    FeatureToggleService, TranslationService, CustomCurrencyPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CostVsBudgetWidgetModule { }


