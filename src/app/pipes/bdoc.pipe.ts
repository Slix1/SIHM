import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bdoc' })
export class BdocPipe implements PipeTransform {

  transform(data: {}, args?): any[] {
    if (data) {

      let dataBdoc : Array<any> = [],
        dataBdocServ : Array<any> = [],
        result : Object = {};

      dataBdoc = data['environmentsEDT'];
      dataBdocServ = data['serversBDoc'];

      dataBdoc.forEach((env: any) => {
        env['bdoc'] = dataBdocServ;
      });

      dataBdoc.forEach((env: any) => {
        env['bdoc'].forEach((bdoc: any) => {
          if (bdoc.id == env.serverBDoc) {
            env['bdoc'] = bdoc;
          }
        });
      });

      dataBdoc.sort((a, b) => a.environment.localeCompare(b.environment));

      result['bdoc'] = dataBdoc;

      // console.log(result);

      return result[args];
    }
  }
}