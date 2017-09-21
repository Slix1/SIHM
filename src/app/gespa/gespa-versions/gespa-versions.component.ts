import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';


@Component({
  selector: 'app-gespa-versions',
  templateUrl: './gespa-versions.component.html',
  styleUrls: ['./gespa-versions.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class GespaVersionsComponent {

    @Input() gespaEnv: object;
  
    constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
    private ErrorService: ErrorService) { }
  
    private gespaVersionsUrl: Array<any> = [];
    public gespaVersionData: Object = {};
    public environments: Array<any> = [];
  
  
    public getGespaVersionsData(request): Object {
  
      this.ApiService.getData(request.url)
        .then(gespaVersionData => this.gespaVersionData[request.env] = {...gespaVersionData, environment: request.env})
        .catch(error => this.gespaVersionData[request.env] = {error: this.ErrorService.getErrorMessage(error), environment: request.env})
        .then(() => this.LoadingService.loading[request.env] = false);
  
      return this.gespaVersionData;
  
    }
  
  
    load(): void {
      
      if (this.gespaEnv['gespaInfosData'].error == undefined) {
        
          this.environments = this.gespaEnv['gespaInfosData'].environments;
      
          this.environments.forEach((env: any, envIndex) => {
            
            this.gespaVersionsUrl[envIndex] = {url: apiUrl + this.gespaEnv['tab'] + '/' + env.environment + '/version', env: env.environment};
          });
      
          this.gespaVersionsUrl.forEach((env: any) => {
      
            this.LoadingService.loadingTrue(env.env);
            this.getGespaVersionsData(env);
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
