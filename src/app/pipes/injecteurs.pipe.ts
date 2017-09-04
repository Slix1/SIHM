import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'injecteurs' })
export class InjecteursPipe implements PipeTransform {

    transform(data: any[], args?): any[] {
        if (data) {

            let dataEnv: Array<any> = [],
                dataDoc: Array<any> = [],
                reception: Array<any> = [],
                receptionFiles: Array<any> = [],
                errors: Array<any> = [],
                errorsFiles: Array<any> = [],
                errorsIntReq: Array<any> = [],
                errorsIntReqFiles: Array<any> = [],
                result: Object = {};

            data.forEach((e: any) => {
                dataEnv.push({ name: e.nameEnvironment });
                dataDoc.push(e.environmentRequests);
            });

            dataDoc.forEach((env, envIndex) => {
                env.forEach((injectResponse) => {
                    if (injectResponse.name == "getNbReception") {
                        reception[envIndex] = injectResponse.response;
                    }
                    if (injectResponse.name == "getFichiersReception") {
                        receptionFiles[envIndex] = injectResponse.response;;
                    }
                    if (injectResponse.name == "getNbErreur") {
                        errors[envIndex] = injectResponse.response;
                    }
                    if (injectResponse.name == "getFichiersErreur") {
                        errorsFiles[envIndex] = injectResponse.response;;
                    }
                    if (injectResponse.name == "getNbErreurInterReq") {
                        errorsIntReq[envIndex] = injectResponse.response;
                    }
                    if (injectResponse.name == "getFichiersErreurInterReq") {
                        errorsIntReqFiles[envIndex] = injectResponse.response;;
                    }
                });
            });

            dataEnv.forEach((env, envIndex) => {
                dataEnv[envIndex] = {
                    name: env.name, reception: reception[envIndex], receptionFiles: receptionFiles[envIndex],
                    errors: errors[envIndex], errorsFiles: errorsFiles[envIndex], errorsIntReq: errorsIntReq[envIndex], errorsIntReqFiles: errorsIntReqFiles[envIndex]
                };
            });

            result = { inject: dataEnv };

            console.log(result);

            return result[args];
        }
    }
}


