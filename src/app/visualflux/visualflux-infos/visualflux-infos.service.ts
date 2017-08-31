import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class VisualFluxInfosService {

    private visualFluxInfos = 'assets/json/mocks/jsonFileConnection/visualflux.json';


    constructor(private http: Http) { }

    public getVisualFluxInfos(): Promise<any> {

        return this.http.get(this.visualFluxInfos)
            .toPromise()
            .then(response => response.json().visualflux)
    }

}
