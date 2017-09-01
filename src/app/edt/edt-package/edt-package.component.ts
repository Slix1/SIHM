import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-edt-package',
  templateUrl: './edt-package.component.html',
  styleUrls: ['./edt-package.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtPackageComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  private edtPackageUrl: string = 'assets/json/mocks/sshConnection/edt.json';
  public edtPackageData: object = {};


  public getEdtPackageData(): Object {
    this.ApiService.getData(this.edtPackageUrl)
      .then(edtPackageData => this.edtPackageData = Object.assign({}, edtPackageData))
      .catch(error => this.edtPackageData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.edtPackageData
  }


  load(): void {

    this.LoadingService.loadingTrue();

    this.getEdtPackageData();
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }

}
