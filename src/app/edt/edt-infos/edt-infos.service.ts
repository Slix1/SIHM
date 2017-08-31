import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class EdtInfosService {

    private edtInfos = 'assets/json/mocks/jsonFileConnection/edt.json';


    constructor(private http: Http) { }

    public getEdtInfos(): Promise<any> {

        return this.http.get(this.edtInfos)
            .toPromise()
            .then(response => response.json().edt)
    }

}
