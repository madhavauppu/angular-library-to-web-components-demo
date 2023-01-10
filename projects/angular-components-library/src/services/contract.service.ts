/*
Licensed Materials - Property of IBM
(C) Copyright IBM Corp. 2017, 2020. All Rights Reserved.
US Government Users Restricted Rights - Use, duplication or disclosure
restricted by GSA ADP Schedule Contract with IBM Corp.
*/
import { Injectable } from '@angular/core';
import { ApiContractService, AuthenticationContractService } from '@cloudMatrix-CAM/cb-common-ui';
import { CurrentUser } from '@cloudMatrix-CAM/cb-common-ui/lib/contracts/authentication/currentUser.interface';

@Injectable({
  providedIn: 'root'
})
export class ContractService extends AuthenticationContractService implements ApiContractService {
  httpOptions = {};
  gateWay: string;

  private _currentUser: CurrentUser;
  private _apiGateway: string;
  private _hostUrl: string;
  private _baseUrl: string;

  constructor() {
    super();
  }

  get apiGateway(): string {
    return this._apiGateway || window['apiGateway'] || 'https://insights-s3-test2-api.multicloud-ibm.com';
  }

  set apiGateway(apiGateway: string) {
    this._apiGateway = apiGateway;
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  set baseUrl(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  get hostUrl(): string {
    return this._hostUrl;
  }

  set hostUrl(hostUrl: string) {
    this._hostUrl = hostUrl;
  }

  get currentUser(): CurrentUser {
    return this._currentUser;
  }

  set currentUser(user: CurrentUser) {
    this._currentUser = user;
  }

  loadMcmpInput(input): Promise<void> {
    return new Promise<void>((resolve) => {
      this.setProperties(input);
      resolve();
    });
  }

  setProperties(input) {
    if (input) {
      Object.entries(input).forEach(([key, value]) => {
        this[key] = value;
      });
    }
  }
}
