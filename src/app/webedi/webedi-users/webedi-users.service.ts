import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class WebEdiUsersService {

    private webEdiUsers = 'assets/json/mocks/ldapConnection/TESTWEBEDI.json';


    constructor(private http: Http) { }

    public getWebEdiUsers(): Promise<any> {

        return this.http.get(this.webEdiUsers)
            .toPromise()
            .then(response => response.json().TESTWEBEDI)
    }

}
