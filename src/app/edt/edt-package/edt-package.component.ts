import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { CmpVersionsService } from './../../services/compare-version-package.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-edt-package',
  templateUrl: './edt-package.component.html',
  styleUrls: ['./edt-package.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService, CmpVersionsService]
})
export class EdtPackageComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService, private CmpVersionsService: CmpVersionsService) { }

  @Input() edtEnv: object;
  private edtPackageUrl: Array<any> = [];
  public edtPackageData: object = {};
  public environments: Array<any> = [];
  public edtVersionsList: Array<any> = [];
  public edtVersionsDetails: Array<any> = [];

  public getEdtPackageData(request): Object {
    this.ApiService.getData(request.url)
      .then(edtPackageData => this.edtPackageData[request.env] = {...edtPackageData, environment: request.env})
      .then(edtPackageData => edtPackageData.listVersions.forEach((version: any) => { this.edtVersionsList.indexOf(version.num) === -1 ? this.edtVersionsList.push((version.num+'')) : this.edtVersionsList;
                                                                                      this.edtVersionsDetails.indexOf(version.versionContent) === -1 ? this.edtVersionsDetails[version.num] = { version: (version.num+''), detail: version.versionContent} : this.edtVersionsDetails}))
      .then(() => this.edtVersionsList.sort(this.CmpVersionsService.cmpVersions).reverse())
      .then(() => this.edtPackageData['versionList'] = {list: this.edtVersionsList, detail: this.edtVersionsDetails})
      .catch(error => this.edtPackageData[request.env] = {error: this.ErrorService.getErrorMessage(error), environment: request.env})
      .then(() => this.LoadingService.loading[request.env] = false);

    return this.edtPackageData
  }

  load(): void {
    
    if (this.edtEnv['EdtInfosData'].error == undefined) {
      this.edtPackageData['versionList'] = [];
      
      this.environments = this.edtEnv['EdtInfosData'].environments;
                
      this.environments.forEach((env: any, envIndex) => {
        env.environment = env.environment.toLowerCase().replace(" ","");
        this.edtPackageUrl[envIndex] = {url: apiUrl + this.edtEnv['tab'] + '/' + env.environment + '/package_version', env: env.environment};
      });
        
      this.edtPackageUrl.forEach((env: any) => {
        this.LoadingService.loadingTrue(env.env);
        this.getEdtPackageData(env);
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
