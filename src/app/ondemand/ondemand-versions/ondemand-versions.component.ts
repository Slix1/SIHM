import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-ondemand-versions',
  templateUrl: './ondemand-versions.component.html',
  styleUrls: ['./ondemand-versions.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class OndemandVersionsComponent {

    @Input() ondemandEnv: object;
  
    constructor(private ApiService: ApiService, public SwitchGlyphiconsService: SwitchGlyphiconsService, public LoadingService: LoadingService,
    private ErrorService: ErrorService) { }
  
    private ondemandVersionsUrl: Array<any> = [];
    public ondemandVersionData: Object = {};
    public environments: Array<any> = [];
  
  
    public getOnDemandVersionsData(request): Object {
  
      this.ApiService.getData(request.url)
        .then(ondemandVersionData => this.ondemandVersionData[request.env.environment] = {...ondemandVersionData, environment: request.env})
        .catch(error => this.ondemandVersionData[request.env.environment] = {error: this.ErrorService.getErrorMessage(error), environment: request.env})
        .then(() => this.LoadingService.loading[request.env.environment] = false);
  
      return this.ondemandVersionData;
  
    }
  
  
    load(): void {
      
      if (this.ondemandEnv['onDemandInfosData'].error == undefined) {
          this.environments = this.ondemandEnv['onDemandInfosData'].environments;
      
          this.environments.forEach((env: any, envIndex) => {
            env['urlEnv'] = env.environment.toLowerCase().replace(/\s/g,"").replace(/[()]/g,"");
            this.ondemandVersionsUrl[envIndex] = {url: apiUrl + this.ondemandEnv['tab'] + '/' + env['urlEnv'] + '/version', env: env};
          });
      
          this.ondemandVersionsUrl.forEach((env: any) => {
      
            this.LoadingService.loadingTrue(env.env.environment);
            this.getOnDemandVersionsData(env);
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