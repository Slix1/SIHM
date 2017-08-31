import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class OnDemandUsersService {

    private onDemandUsers = 'assets/json/mocks/ldapConnection/TESTONDEMAND.json';


    constructor(private http: Http) { }

    public getOnDemandUsers(): Promise<any> {

        return this.http.get(this.onDemandUsers)
            .toPromise()
            .then(response => response.json().TESTONDEMAND)
    }

}
