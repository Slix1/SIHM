import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'versions' })
export class PackageVersionsPipe implements PipeTransform {

    transform(data: any[], args?): any[] {

        if (data) {
            let dataEnv : Array<any> = [],
                dataPackage : Array<any> = [],
                versionsList : Array<any> = [],
                detailsList : Array<any> = [],
                result : Object = {};

            data.sort((a, b) => a.nameEnvironment.localeCompare(b.nameEnvironment));

            data.forEach((e: any) => {
                dataEnv.push({ name: e.nameEnvironment });
                dataPackage.push(e.environmentRequests);
            });

            dataPackage.forEach((env, envIndex) => {
                env.forEach((packageRequest) => {
                    if (packageRequest.name == "getVersions") {
                        dataPackage[envIndex] = packageRequest.response.split('\n').map(function (data) { return data.split('|'); });
                    }
                });
            });

            dataPackage.forEach((env, envIndex) => {
                env.forEach((pack, packIndex) => {
                    if (pack[2] !== undefined && pack[0] !== undefined) {
                        versionsList.push(pack[2]);
                        detailsList.push(pack[0]);
                    }
                    env[packIndex] = { detail: pack[0], date: pack[1], version: pack[2] };

                });
            });

            versionsList = versionsList.sort().reverse().filter((elem, index, self) => index == self.indexOf(elem));

            detailsList = detailsList.sort().reverse().filter((elem, index, self) => index == self.indexOf(elem));

            versionsList.forEach((e, envIndex) => {
                versionsList[envIndex] = { detail: detailsList[envIndex], version: versionsList[envIndex] };
            });


            result = {servers: dataEnv, packages: dataPackage, versionsList: versionsList};

            return result[args];
        }
    }
}
