import {Injectable} from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class EdtDaemonsService {

    private edtDaemons: string = 'assets/json/edt.json';


    constructor(private http: Http) { }

    public getEdtDaemonsInfos(): Promise<any> {
        return this.http.get(this.edtDaemons)
                        .toPromise()
                        .then(response => response.json().edt)
    }

}