import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';


@Component({
  selector: 'app-docinjecteurs',
  templateUrl: './doc-injecteurs.component.html',
  styleUrls: ['./doc-injecteurs.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class DocinjecteursComponent {


  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  @Input() documentumEnv: object;
  private documentumInjecteursUrl: Array<any> = [];
  public documentumInjecteursData: object = {};
  public environments: Array<any> = [];


  public getDocInjecteursData(request): Object {

    this.ApiService.getData(request.url)
      .then(documentumInjecteursData => this.documentumInjecteursData[request.env] = {...documentumInjecteursData, environment: request.env})
      .catch(error => this.documentumInjecteursData[request.env] = {error: this.ErrorService.getErrorMessage(error), environment: request.env})
      .then(() => this.LoadingService.loading[request.env] = false);

    return this.documentumInjecteursData;
  }


  load(): void {
    
    if (this.documentumEnv['documentumInfosData'].error == undefined) {
            
      this.environments = this.documentumEnv['documentumInfosData'].environments;
                
      this.environments.forEach((env: any, envIndex) => {
        env.environment = env.environment.toLowerCase().replace(" ","");
        this.documentumInjecteursUrl[envIndex] = {url: apiUrl + this.documentumEnv['tab'] + '/' + env.environment + '/injecteurs', env: env.environment};
      });
        
      this.documentumInjecteursUrl.forEach((env: any) => {
        this.LoadingService.loadingTrue(env.env);
        this.getDocInjecteursData(env);
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
