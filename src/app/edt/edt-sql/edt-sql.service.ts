import {Injectable} from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class EdtSqlService {

    private edtSql: string = 'assets/json/mocks/sshConnection/edt.json';


    constructor(private http: Http) { }

    public getEdtSqlInfos(): Promise<any> {
        return this.http.get(this.edtSql)
                        .toPromise()
                        .then(response => response.json().edt)
    }

}