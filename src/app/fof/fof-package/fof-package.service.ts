import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class FofPackageService {

    private fofPackage = 'assets/json/mocks/sshConnection/fof.json';


    constructor(private http: Http) { }

    public getFofPackageInfos(): Promise<any> {

        return this.http.get(this.fofPackage)
            .toPromise()
            .then(response => response.json().fof)
    }

}
