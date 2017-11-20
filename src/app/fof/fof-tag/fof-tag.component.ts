import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-fof-tag',
  templateUrl: './fof-tag.component.html',
  styleUrls: ['./fof-tag.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class FofTagComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
    private ErrorService: ErrorService) { }

    @Input() fofEnv: object;
    private fofTagUrl: Array<any> = [];
    public fofTagData: object = {};
    public environments: Array<any> = [];
    public fofVersionsList: Array<any> = [];
    public fofVersionsDetails: Array<any> = [];
   
    public getFofPackageData(request): Object {
      this.ApiService.getData(request.url)
      .then(fofTagData => this.fofTagData[request.env] = {...fofTagData})
      .then(fofTagData => fofTagData.listVersions.forEach((tag: any) => { this.fofVersionsList.indexOf(tag.num) === -1 ? this.fofVersionsList.push((tag.num)) : this.fofVersionsList;
           this.fofVersionsDetails.indexOf(tag.versionContent) === -1 ? this.fofVersionsDetails[tag.num] = { version: (tag.num), detail: tag.versionContent} : this.fofVersionsDetails}))
      .then(() => this.fofVersionsList.sort().reverse())
      .then(() => this.fofTagData['versionList'] = {list: this.fofVersionsList, detail: this.fofVersionsDetails})
      .catch(error => this.fofTagData[request.env] = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading[request.env] = false);
  
      return this.fofTagData
    }
  
  
    load(): void {
      
      if (this.fofEnv['fofInfosData'].error == undefined) {
                
        this.environments = this.fofEnv['fofInfosData'].environments;
  
        this.environments.forEach((env: any, envIndex) => {
          env['urlEnv'] = env.environment.toLowerCase().replace(/\s/g,"").replace(/[()]/g,"");
          this.fofTagUrl[envIndex] = {url: apiUrl + this.fofEnv['tab'] + '/' + env['urlEnv'] + '/tag_version', env: env.environment};
         
        });
          
        this.fofTagUrl.forEach((env: any) => {
          this.LoadingService.loadingTrue(env.env);
          this.getFofPackageData(env);
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