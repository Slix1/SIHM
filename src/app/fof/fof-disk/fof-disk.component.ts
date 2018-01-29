import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-fofdisk',
  templateUrl: './fof-disk.component.html',
  styleUrls: ['./fof-disk.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class FofdiskComponent {

  constructor(private ApiService: ApiService, public SwitchGlyphiconsService: SwitchGlyphiconsService, public LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  @Input() fofEnv: object;
  private fofDiskUrl: Array<any> = [];
  public fofDiskData: object = {};
  public environments: Array<any> = [];


  public getFofDiskData(request): Object {
    this.ApiService.getData(request.url)
      .then(fofDiskData => this.fofDiskData[request.env] = {...fofDiskData, environment: request.env})
      .catch(error => this.fofDiskData[request.env] = {error: this.ErrorService.getErrorMessage(error), environment: request.env})
      .then(() => this.LoadingService.loading[request.env] = false);

    return this.fofDiskData
  }


  load(): void {
    if (this.fofEnv['fofInfosData'].error == undefined) {   
      
      this.environments = this.fofEnv['fofInfosData'].environments;
                
      this.environments.forEach((env: any, envIndex) => {
        env['urlEnv'] = env.environment.toLowerCase().replace(/\s/g,"").replace(/[()]/g,"");
        this.fofDiskUrl[envIndex] = {url: apiUrl + this.fofEnv['tab'] + '/' + env['urlEnv'] + '/disk', env: env.environment};
      });
        
      this.fofDiskUrl.forEach((env: any) => {
        this.LoadingService.loadingTrue(env.env);
        this.getFofDiskData(env);
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