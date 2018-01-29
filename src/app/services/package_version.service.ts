import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class PackageService {

    constructor(private http: Http) { }

    public getPackageContent(url: string, version: string): Promise<any> {

        let data;
        let spliteUrl = url.split('/package_version');
        let packageUrl = spliteUrl[0] + '/' + version + '/package_version';
   
        return this.http.get(packageUrl)
                    .toPromise()
                    .then(response => data = response.json())
    }
}