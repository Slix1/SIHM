import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-edt-sql',
  templateUrl: './edt-sql.component.html',
  styleUrls: ['./edt-sql.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtSqlComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  @Input() edtEnv: object;
  private edtSqlUrl: Array<any> = [];
  public edtSqlData: object = {};
  public environments: Array<any> = [];


  public getEdtSqlData(request): Object {
    this.ApiService.getData(request.url)
      .then(edtSqlData => this.edtSqlData[request.env] = {...edtSqlData, environment: request.env})
      .catch(error => this.edtSqlData[request.env] = {error: this.ErrorService.getErrorMessage(error), environment: request.env})
      .then(() => this.LoadingService.loading[request.env] = false);

    return this.edtSqlData
  }

  load(): void {
    
    if (this.edtEnv['EdtInfosData'].error == undefined) {
      
      this.environments = this.edtEnv['EdtInfosData'].environments;
                
      this.environments.forEach((env: any, envIndex) => {
        env['urlEnv'] = env.environment.toLowerCase().replace(/\s/g,"").replace(/[()]/g,"");
        this.edtSqlUrl[envIndex] = {url: apiUrl + this.edtEnv['tab'] + '/sql_version', env: env.environment};
      });
        
      this.edtSqlUrl.forEach((env: any) => {
        this.LoadingService.loadingTrue(env.env);
        this.getEdtSqlData(env);
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
