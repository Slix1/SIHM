import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-edtdisk',
  templateUrl: './edt-disk.component.html',
  styleUrls: ['./edt-disk.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtdiskComponent {


 constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  @Input() edtEnv: object;
  private edtDiskUrl: Array<any> = [];
  public edtDiskData: object = {};
  public environments: Array<any> = [];


  public getEdtDiskData(request): Object {
    this.ApiService.getData(request.url)
      .then(edtDiskData => this.edtDiskData[request.env] = {...edtDiskData, environment: request.env})
      .catch(error => this.edtDiskData[request.env] = {error: this.ErrorService.getErrorMessage(error), environment: request.env})
      .then(() => this.LoadingService.loading[request.env] = false);

    return this.edtDiskData
  }


  load(): void {
    
    if (this.edtEnv['EdtInfosData'].error == undefined) {   
      this.environments = this.edtEnv['EdtInfosData'].environments;
                
      this.environments.forEach((env: any, envIndex) => {
        env.environment = env.environment.toLowerCase().replace(" ","");
        this.edtDiskUrl[envIndex] = {url: apiUrl + this.edtEnv['tab'] + '/' + env.environment + '/disk', env: env.environment};
      });
        
      this.edtDiskUrl.forEach((env: any) => {
        this.LoadingService.loadingTrue(env.env);
        this.getEdtDiskData(env);
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