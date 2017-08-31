import { Component } from '@angular/core';
import { FofPackageService } from './fof-package.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-fofpackage',
  templateUrl: './fof-package.component.html',
  styleUrls: ['./fof-package.component.css'],
  providers: [FofPackageService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class FofpackageComponent {

  constructor(public FofPackageService: FofPackageService, public SwitchGlyphiconsService: SwitchGlyphiconsService, public LoadingService: LoadingService,
  public ErrorService: ErrorService) {
  }

  fofPackageData: object = {};


  public getFofPackageData(): Object {
    this.FofPackageService.getFofPackageInfos()
      .then(fofPackageData => this.fofPackageData = Object.assign({}, fofPackageData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.fofPackageData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.fofPackageData
  }


  load(): void {

    this.LoadingService.loadingTrue();

    this.getFofPackageData();
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }



}
