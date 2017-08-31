import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class WebEdiVersionsService {

    private webEdiVersions = 'assets/json/mocConnection/url.json';


    constructor(private http: Http) { }

    public getWebEdiVersions(): Promise<any> {

        return this.http.get(this.webEdiVersions)
            .toPromise()
            .then(response => response.json().webedi)
    }

}
