import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class EdtBdocService {

    private edtBdoc: string = 'assets/json/mocks/jsonFileConnection/edt.json';


    constructor(private http: Http) { }

    public getEdtBdocInfos(): Promise<any> {

        return this.http.get(this.edtBdoc)
            .toPromise()
            .then(response => response.json())
    }

}