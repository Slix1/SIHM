import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class GespaInfosService {

    private gespaInfos = 'assets/json/mocks/jsonFileConnection/gespa.json';


    constructor(private http: Http) { }

    public getGespaInfos(): Promise<any> {

        return this.http.get(this.gespaInfos)
            .toPromise()
            .then(response => response.json().gespa)
    }

}
