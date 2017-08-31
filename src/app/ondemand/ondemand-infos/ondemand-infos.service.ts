import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class OnDemandInfosService {

    private onDemandInfos = 'assets/json/mocks/jsonFileConnection/ondemand.json';


    constructor(private http: Http) { }

    public getOnDemandInfos(): Promise<any> {

        return this.http.get(this.onDemandInfos)
            .toPromise()
            .then(response => response.json().ondemand)
    }

}
