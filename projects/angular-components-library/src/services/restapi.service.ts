import { ApiContractService } from '@cloudMatrix-CAM/cb-common-ui';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class RestApiServices {
  public _apiGateway = 'https://ecamstage12-api.multicloud-ibm.com';
  httpOptions = {};
  gateway: string;
  constructor(private readonly http: HttpClient, 
    private readonly apiContractService: ApiContractService) {
    this.gateway = this.apiContractService.apiGateway || window['globalApiGateway'] || this._apiGateway;
    this.httpOptions['headers'] = new HttpHeaders({'Content-Type': 'application/json'});
    this.httpOptions['withCredentials'] = !!this.apiContractService.apiGateway;
  }

}
