import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sql' })
export class SqlPipe implements PipeTransform {

  transform(data: any[], args?): any[] {
    if (data) {

      let dataEnv : Array<any> = [],
        dataSql : Array<any> = [],
        result : Object = {};

      data.sort((a, b) => a.nameEnvironment.localeCompare(b.nameEnvironment));

      data.forEach((e: any) => {
        dataEnv.push({ name: e.nameEnvironment });
        dataSql.push(e.environmentRequests);
      });

      dataEnv.forEach((env: any, envIndex) => {
        env.data = dataSql[envIndex];
      });

      dataEnv.forEach((env: any, envIndex) => {
        env.data.forEach((sqlRequest) => {
          if (sqlRequest.name == "getSQLVersion_readFileInfos") {
            dataEnv[envIndex].dataSql = sqlRequest.response.split('\n').map(function (infos) { return infos.split('|'); });
          }
        });
      });

      dataEnv.forEach((env: any, envIndex) => {
        if (env.dataSql !== undefined) {
          env.dataSql.forEach((sqlData, sqlDataIndex) => {
            dataEnv[envIndex].dataSql[sqlDataIndex] = { whatisthis: sqlData[0], name: sqlData[1], files: sqlData[2], scriptStart: sqlData[3], scriptEnd: sqlData[4] };
            dataEnv[envIndex].dataSql.reverse();
          });
        }
      });

      result = {servers: dataEnv};

      return result[args];
    }
  }
}


