import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-webedi-versions',
  templateUrl: './webedi-versions.component.html',
  styleUrls: ['./webedi-versions.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class WebediVersionsComponent {

  @Input() webediEnv: object;

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
    private ErrorService: ErrorService) { }

  private webEdiVersionsUrl: Array<any> = [];
  public webEdiVersionData: object = {};
  public environments: Array<any> = [];

  public getWebEdiVersionsData(request): Object {

    this.ApiService.getData(request.url)
      .then(webEdiVersionData => this.webEdiVersionData[request.env] = { ...webEdiVersionData, environment: request.env })
      .then(()=> console.log(this.webEdiVersionData))
      .catch(error => this.webEdiVersionData[request.env] = { error: this.ErrorService.getErrorMessage(error), environment: request.env })
      .then(() => this.LoadingService.loading[request.env] = false);

    return this.webEdiVersionData;

  }


  load(): void {
    
      if (this.webediEnv['webEdiInfosData'].error == undefined) {
        this.environments = this.webediEnv['webEdiInfosData'].environments;
        
        this.environments.forEach((env: any, envIndex) => {
          this.webEdiVersionsUrl[envIndex] = {url: apiUrl + this.webediEnv['tab'] + '/' + env.environment + '/version', env: env.environment};
        });
        
        this.webEdiVersionsUrl.forEach((env: any) => {
          this.LoadingService.loadingTrue(env.env);
          this.getWebEdiVersionsData(env);
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
