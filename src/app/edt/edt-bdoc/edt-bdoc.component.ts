import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-edtbdoc',
  templateUrl: './edt-bdoc.component.html',
  styleUrls: ['./edt-bdoc.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtbdocComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  @Input() edtEnv: object;
  private edtBdocUrl: Array<any> = [];
  public edtBdocData: object = {};
  public environments: Array<any> = [];


  public getEdtBdocData(request): Object {
    this.ApiService.getData(request.url)
      .then(edtBdocData => this.edtBdocData[request.env] = {...edtBdocData, environment: request.env})
      .catch(error => this.edtBdocData[request.env] = {error: this.ErrorService.getErrorMessage(error), environment: request.env})
      .then(() => this.LoadingService.loading[request.env] = false);

    return this.edtBdocData
  }

  load(): void {
   if (this.edtEnv['EdtInfosData'].error == undefined) {
        this.environments = this.edtEnv['EdtInfosData'].environments;
            
        this.environments.forEach((env: any, envIndex) => {
          env['urlEnv'] = env.environment.toLowerCase().replace(/\s/g,"").replace(/[()]/g,"");
          this.edtBdocUrl[envIndex] = {url: apiUrl + this.edtEnv['tab'] + '/' + env['urlEnv'] + '/bdoc', env: env.environment};
        });
    
        this.edtBdocUrl.forEach((env: any) => {
    
          this.LoadingService.loadingTrue(env.env);
          this.getEdtBdocData(env);
        });
    
      }
    }

  refresh(): void {
    this.load();
  }

  switch(): void {
    if (this.SwitchGlyphiconsService.currentGlyphicon !== this.SwitchGlyphiconsService.minus) {
      this.load();
    }
    this.SwitchGlyphiconsService.switchGlyphicon();
  }

}