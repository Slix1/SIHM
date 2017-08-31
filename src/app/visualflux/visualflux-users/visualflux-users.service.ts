import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class VisualFluxUsersService {

    private visualFluxUsers = 'assets/json/mocks/ldapConnection/TESTVISUALFLUX.json';


    constructor(private http: Http) { }

    public getVisualFluxUsers(): Promise<any> {

        return this.http.get(this.visualFluxUsers)
            .toPromise()
            .then(response => response.json().TESTVISUALFLUX)
    }

}
