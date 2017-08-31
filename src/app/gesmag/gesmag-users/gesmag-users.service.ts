import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class GesmagUsersService {

    private gesmagUsers = 'assets/json/mocks/ldapConnection/TESTGESMAG.json';


    constructor(private http: Http) { }

    public getGesmagUsers(): Promise<any> {

        return this.http.get(this.gesmagUsers)
            .toPromise()
            .then(response => response.json().TESTGESMAG)
    }

}
