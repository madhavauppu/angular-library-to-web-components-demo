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
import { ApiContractService, AuthenticationContractService, CbCommonUiLibModule, CbTranslationUiLibModule, CustomCurrencyPipe, FeatureToggleService, TranslationModule, TranslationService } from '@cloudMatrix-CAM/cb-common-ui';
import { AssetVsUtilizationModule } from '@cloudMatrix-CAM/ecam-common-ui';
import { ContractService } from '../../services/contract.service';
import { RestApiServices } from '../../services/restapi.service';
import { AssetVsUtilizationWidgetComponent } from './asset-vs-utilization-widget.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AssetVsUtilizationModule,
    TranslationModule,
    CbTranslationUiLibModule.forRoot(),
    CbCommonUiLibModule.forRoot(),
  ],
  declarations: [AssetVsUtilizationWidgetComponent],
  exports: [AssetVsUtilizationWidgetComponent],
  providers: [AuthenticationContractService, RestApiServices,
    FeatureToggleService, TranslationService, CustomCurrencyPipe, 
    {
      provide: ApiContractService,
      useExisting: ContractService
    }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AssetVsUtilizationWidgetModule { }
