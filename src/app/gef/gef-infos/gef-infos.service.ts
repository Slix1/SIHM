import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class GefInfosService {

    private gefInfos = 'assets/json/mocks/jsonFileConnection/gef.json';


    constructor(private http: Http) { }

    public getGefInfos(): Promise<any> {

        return this.http.get(this.gefInfos)
            .toPromise()
            .then(response => response.json().gef)
    }

}
