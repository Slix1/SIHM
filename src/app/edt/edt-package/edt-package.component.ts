import { Component } from '@angular/core';
import { EdtPackageService } from './edt-package.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-edt-package',
  templateUrl: './edt-package.component.html',
  styleUrls: ['./edt-package.component.css'],
  providers: [EdtPackageService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtPackageComponent {

  constructor(public EdtPackageService: EdtPackageService, public SwitchGlyphiconsService: SwitchGlyphiconsService, public LoadingService: LoadingService, public ErrorService: ErrorService) {
  };

  edtPackageData: object = {};


  public getEdtPackageData(): Object {
    this.EdtPackageService.getEdtPackageInfos()
      .then(edtPackageData => this.edtPackageData = Object.assign({}, edtPackageData))
      .then(() => this.LoadingService.loading = false)
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
