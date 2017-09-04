import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-fofpackage',
  templateUrl: './fof-package.component.html',
  styleUrls: ['./fof-package.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class FofpackageComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  private fofPackageUrl: string = 'assets/json/mocks/sshConnection/fof.json';
  public fofPackageData: object = {};


  public getFofPackageData(): Object {
    this.ApiService.getData(this.fofPackageUrl)
      .then(fofPackageData => this.fofPackageData = {...fofPackageData})
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
