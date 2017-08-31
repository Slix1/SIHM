import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class DocumentumInfosService {

    private documentumInfos = 'assets/json/mocks/jsonFileConnection/documentum.json';


    constructor(private http: Http) { }

    public getDocumentumInfos(): Promise<any> {

        return this.http.get(this.documentumInfos)
            .toPromise()
            .then(response => response.json().documentum);

    }

}

