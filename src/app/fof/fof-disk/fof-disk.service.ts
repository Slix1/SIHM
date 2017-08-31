import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class FofDiskService {

    private fofDisk = 'assets/json/mocks/sshConnection/fof.json';


    constructor(private http: Http) { }

    public getFofDiskInfos(): Promise<any> {

        return this.http.get(this.fofDisk)
            .toPromise()
            .then(response => response.json().fof)
    }

}
