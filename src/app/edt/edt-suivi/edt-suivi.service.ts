import {Injectable} from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class EdtSuiviService {

    private edtSuivi: string = 'a';


    constructor(private http: Http) { }

    public getEdtSuiviInfos(): Promise<any> {
        return this.http.get(this.edtSuivi)
                        .toPromise()
                        .then(response => response.json().edt)
    }

}