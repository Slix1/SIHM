import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class DocumentumInjecteursService {

    private documentumInjecteurs = 'assets/json/mocks/sshConnection/documentum.json';


    constructor(private http: Http) { }

    public getDocumentumInjecteursInfos(): Promise<any> {

        return this.http.get(this.documentumInjecteurs)
            .toPromise()
            .then(response => response.json().documentum)
    }

}
