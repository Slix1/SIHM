import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-gesmag-versions',
  templateUrl: './gesmag-versions.component.html',
  styleUrls: ['./gesmag-versions.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class GesmagVersionsComponent {

  @Input() gesmagEnv: object;

  constructor(private ApiService: ApiService, public SwitchGlyphiconsService: SwitchGlyphiconsService, public LoadingService: LoadingService,
    private ErrorService: ErrorService) { }

  private gesmagVersionsUrl: Array<any> = [];
  public gesmagVersionData: Object = {};
  public environments: Array<any> = [];


  public getGesmagVersionsData(request): Object {

    this.ApiService.getData(request.url)
      .then(gesmagVersionData => this.gesmagVersionData[request.env.environment] = { ...gesmagVersionData, environment: request.env})
      .catch(error => this.gesmagVersionData[request.env.environment] = { error: this.ErrorService.getErrorMessage(error), environment: request.env})
      .then(() => this.LoadingService.loading[request.env.environment] = false);

    return this.gesmagVersionData;

  }


  load(): void {

    if (this.gesmagEnv['gesmagInfosData'].error == undefined) {
      this.environments = this.gesmagEnv['gesmagInfosData'].environments;

      this.environments.forEach((env: any, envIndex) => {
        env['urlEnv'] = env.environment.toLowerCase().replace(/\s/g,"").replace(/[()]/g,"");
        this.gesmagVersionsUrl[envIndex] = { url: apiUrl + this.gesmagEnv['tab'] + '/' + env['urlEnv'] + '/version', env: env };
      });

      this.gesmagVersionsUrl.forEach((env: any) => {

        this.LoadingService.loadingTrue(env.env.environment);
        this.getGesmagVersionsData(env);
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