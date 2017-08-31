import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class WebEdiInfosService {

    private webEdiInfos = 'assets/json/mocks/jsonFileConnection/webedi.json';


    constructor(private http: Http) { }

    public getWebEdiInfos(): Promise<any> {

        return this.http.get(this.webEdiInfos)
            .toPromise()
            .then(response => response.json().webedi)
    }

}
