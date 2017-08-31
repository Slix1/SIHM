import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class GesmagInfosService {

    private gesmagInfos = 'assets/json/mocks/jsonFileConnection/gesmag.json';


    constructor(private http: Http) { }

    public getGesmagInfos(): Promise<any> {

        return this.http.get(this.gesmagInfos)
            .toPromise()
            .then(response => response.json().gesmag)
    }

}
