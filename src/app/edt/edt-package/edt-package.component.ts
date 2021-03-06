import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { PackageService } from './../../services/package_version.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { CmpVersionsService } from './../../services/compare-version-package.service';
import { apiUrl } from './../../constants/api-url.constant';


@Component({
  selector: 'app-edt-package',
  templateUrl: './edt-package.component.html',
  styleUrls: ['./edt-package.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService, CmpVersionsService, PackageService]
})
export class EdtPackageComponent {

  constructor(public ApiService: ApiService, public SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
    public ErrorService: ErrorService, public CmpVersionsService: CmpVersionsService, public PackageService: PackageService) { }


  @Input() edtEnv: object;
  private edtPackageUrl: Array<any> = [];
  public edtPackageData = { versionList : {list: null,detail : null}};
  public environments: Array<any> = [];
  public edtVersionsList: Array<any> = [];
  public edtVersionsDetails: Array<any> = [];

  public getEdtPackageData(request): Object {

    this.ApiService.getData(request.url)
      .then(edtPackageData => this.edtPackageData[request.env] = { ...edtPackageData, environment: request.env })

      .then(edtPackageData => edtPackageData.listVersions.forEach((version: any) => {
        this.edtVersionsList.indexOf(version.num) === -1 ?
          (this.edtVersionsList.push((version.num + '')),
            this.edtVersionsDetails[version.num] = this.PackageService.getPackageContent(request.url, version.num)
              .then(data =>
                this.edtVersionsDetails[version.num] = { version: version.num, content: data.versionContent }
              )
              .catch(error => this.edtPackageData[request.env] = { error: this.ErrorService.getErrorMessage(error), environment: request.env }))
          : this.edtVersionsList;
      }))
      .then(() => this.edtVersionsList.sort(this.CmpVersionsService.cmpVersions).reverse())
      .then(() => this.edtPackageData['versionList'] = { list: this.edtVersionsList, detail: this.edtVersionsDetails })
      .catch(error => this.edtPackageData[request.env] = { error: this.ErrorService.getErrorMessage(error), environment: request.env })
      .then(() => this.LoadingService.loading[request.env] = false);

    return this.edtPackageData
  }


  load(): void {

    if (this.edtEnv['EdtInfosData'].error == undefined) {
      this.edtPackageData.versionList = {list: null,detail : null};

      this.environments = this.edtEnv['EdtInfosData'].environments;

      this.environments.forEach((env: any, envIndex) => {
        env['urlEnv'] = env.environment.toLowerCase().replace(/\s/g, "").replace(/[()]/g, "");
        this.edtPackageUrl[envIndex] = {url: apiUrl + this.edtEnv['tab'] + '/' + env['urlEnv'] + '/package_version', env: env.environment};

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


