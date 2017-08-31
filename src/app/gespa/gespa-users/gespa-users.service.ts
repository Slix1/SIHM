import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class GespaUsersService {

    private gespaUsers = 'assets/json/mocks/ldapConnection/TESTGESPA.json';


    constructor(private http: Http) { }

    public getGespaUsers(): Promise<any> {

        return this.http.get(this.gespaUsers)
            .toPromise()
            .then(response => response.json().TESTGESPA)
    }

}
