/*
Licensed Materials - Property of IBM
(C) Copyright IBM Corp. 2019, 2020. All Rights Reserved.
US Government Users Restricted Rights - Use, duplication or disclosure
restricted by GSA ADP Schedule Contract with IBM Corp.
*/
import { Injectable } from '@angular/core';
import { ApiContractService } from '@cloudMatrix-CAM/cb-common-ui/lib/contracts/apis/api.contract.service';

@Injectable()
export class ApiService implements ApiContractService {
  get apiGateway(): string {
   return 'https://insights-s3-test2-api.multicloud-ibm.com'; // window['globalApiGateway'];
  }
}
