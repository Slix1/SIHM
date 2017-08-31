import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class EdtDiskService {

    private edtDisk = 'assets/json/mocks/sshConnection/edt.json';


    constructor(private http: Http) { }

    public getEdtDiskInfos(): Promise<any> {

        return this.http.get(this.edtDisk)
            .toPromise()
            .then(response => response.json().edt)
    }

}
