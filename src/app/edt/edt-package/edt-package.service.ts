import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class EdtPackageService {

    private edtPackage = 'assets/json/mocks/sshConnection/edt.json';


    constructor(private http: Http) { }

    public getEdtPackageInfos(): Promise<any> {

        return this.http.get(this.edtPackage)
            .toPromise()
            .then(response => response.json().edt)
    }

}
