import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    public getData(url: string): Promise<any> {

        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
    }

}