import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-visualflux-versions',
  templateUrl: './visualflux-versions.component.html',
  styleUrls: ['./visualflux-versions.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class VisualfluxVersionsComponent {

    @Input() visualfluxEnv: object;
  
    constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
    private ErrorService: ErrorService) { }
  
    private visualfluxVersionsUrl: Array<any> = [];
    public visualfluxVersionData: Object = {};
    public environments: Array<any> = [];
  
  
    public getVisualFluxVersionsData(request): Object {
  
      this.ApiService.getData(request.url)
        .then(visualfluxVersionData => this.visualfluxVersionData[request.env] = {...visualfluxVersionData, environment: request.env})
        .catch(error => this.visualfluxVersionData[request.env] = {error: this.ErrorService.getErrorMessage(error), environment: request.env})
        .then(() => this.LoadingService.loading[request.env] = false);
  
      return this.visualfluxVersionData;
  
    }
  
  
    load(): void {
      
      if (this.visualfluxEnv['visualFluxInfosData'].error == undefined) {
          this.environments = this.visualfluxEnv['visualFluxInfosData'].environments;
      
          this.environments.forEach((env: any, envIndex) => {
            
            this.visualfluxVersionsUrl[envIndex] = {url: apiUrl + this.visualfluxEnv['tab'] + '/' + env.environment + '/version', env: env.environment};
          });
      
          this.visualfluxVersionsUrl.forEach((env: any) => {
      
            this.LoadingService.loadingTrue(env.env);
            this.getVisualFluxVersionsData(env);
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
