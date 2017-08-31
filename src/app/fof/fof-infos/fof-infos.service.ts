import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';


@Injectable()
export class FofInfosService {

    private fofInfos = 'assets/json/mocks/jsonFileConnection/fof.json';


    constructor(private http: Http) { }

    public getFofInfos(): Promise<any> {

        return this.http.get(this.fofInfos)
            .toPromise()
            .then(response => response.json().fof)

    }

}
