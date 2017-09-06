import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'version'
})
export class VersionPipe implements PipeTransform {

  transform(data: any[], args?): any[] {

    if (data) {
      let url: Array<any> = [],
        dataUrl: Array<any> = [],
        dataUrlTxt: Array<any> = [],
        dataUrlLink: Array<any> = [],
        result: Object = {};

      data.forEach((url, Index) => {

        if (new RegExp("\\b" + args + "\\b").test(url.url)) {
          dataUrl.push(url);
        }

      });

      dataUrl.forEach((url, Index) => {

        if (new RegExp("\\b" + args + "-www\\b").test(url.url)) {
          dataUrlTxt.push(url);
        } else {
          dataUrlLink.push(url);
        }

      });

      dataUrlLink.forEach((url, index) => {

        let server = url.url.match("^(?:https?:)?(?:\/\/)?([^\/\?]+)");
        dataUrlLink[index] = { ...url, server: server[1] }
      });

      
      result[args] = dataUrlLink;

      return result[args];
    }
  }

}
