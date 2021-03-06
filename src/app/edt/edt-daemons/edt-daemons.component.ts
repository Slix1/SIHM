import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-edt-daemons',
  templateUrl: './edt-daemons.component.html',
  styleUrls: ['./edt-daemons.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtDaemonsComponent {

  constructor(public ApiService: ApiService, public SwitchGlyphiconsService: SwitchGlyphiconsService, public LoadingService: LoadingService,
    public ErrorService: ErrorService) { }

  @Input() edtEnv: object;
  private edtDaemonsUrl: Array<any> = [];
  public edtDaemonsData: object = {};
  public environments: Array<any> = [];


  public getEdtDaemonsData(request): Object {
    this.ApiService.getData(request.url)
      .then(edtDaemonsData => this.edtDaemonsData[request.env] = {...edtDaemonsData, environment: request.env})
      .catch(error => this.edtDaemonsData[request.env] = {error: this.ErrorService.getErrorMessage(error), environment: request.env})
      .then(() => this.LoadingService.loading[request.env] = false);

    return this.edtDaemonsData
  }

  load(): void {
    
    if (this.edtEnv['EdtInfosData'].error == undefined) {
      this.edtDaemonsData['versionList'] = [];
      
      this.environments = this.edtEnv['EdtInfosData'].environments;
                
      this.environments.forEach((env: any, envIndex) => {
        env['urlEnv'] = env.environment.toLowerCase().replace(/\s/g,"").replace(/[()]/g,"");
        this.edtDaemonsUrl[envIndex] = {url: apiUrl + this.edtEnv['tab'] + '/' + env['urlEnv'] + '/daemons', env: env.environment};
        
      });
        
      this.edtDaemonsUrl.forEach((env: any) => {
        this.LoadingService.loadingTrue(env.env);
        this.getEdtDaemonsData(env);
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