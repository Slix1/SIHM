import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { CmpVersionsService } from './../../services/compare-version-package.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-fofpackage',
  templateUrl: './fof-package.component.html',
  styleUrls: ['./fof-package.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService, CmpVersionsService]
})
export class FofpackageComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService, private CmpVersionsService: CmpVersionsService) { }

  @Input() fofEnv: object;
  private fofPackageUrl: Array<any> = [];
  public fofPackageData: object = {};
  public environments: Array<any> = [];
  public fofVersionsList: Array<any> = [];
  public fofVersionsDetails: Array<any> = [];


  public getFofPackageData(request): Object {
    this.ApiService.getData(request.url)
      .then(fofPackageData => this.fofPackageData[request.env] = {...fofPackageData})
      .then(fofPackageData => fofPackageData.listVersions.forEach((version: any) => { this.fofVersionsList.indexOf(version.num) === -1 ? this.fofVersionsList.push((version.num+'')) : this.fofVersionsList;
           this.fofVersionsDetails.indexOf(version.versionContent) === -1 ? this.fofVersionsDetails[version.num] = { version: (version.num+''), detail: version.versionContent} : this.fofVersionsDetails}))
      .then(() => this.fofVersionsList.sort(this.CmpVersionsService.cmpVersions).reverse())
      .then(() => this.fofPackageData['versionList'] = {list: this.fofVersionsList, detail: this.fofVersionsDetails})
      .catch(error => this.fofPackageData[request.env] = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading[request.env] = false);

    return this.fofPackageData
  }


  load(): void {
    
    if (this.fofEnv['fofInfosData'].error == undefined) {
      this.fofPackageData['versionList'] = [];
      
      this.environments = this.fofEnv['fofInfosData'].environments;

      this.environments.forEach((env: any, envIndex) => {
        this.fofPackageUrl[envIndex] = {url: apiUrl + this.fofEnv['tab'] + '/' + env.environment + '/package_version', env: env.environment};
       
      });
        
      this.fofPackageUrl.forEach((env: any) => {
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
