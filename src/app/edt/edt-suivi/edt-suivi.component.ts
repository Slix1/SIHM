import { Component } from '@angular/core';
import { EdtSuiviService } from './edt-suivi.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-edt-suivi',
  templateUrl: './edt-suivi.component.html',
  styleUrls: ['./edt-suivi.component.css'],
  providers: [EdtSuiviService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtSuiviComponent {

  constructor(public EdtSuiviService: EdtSuiviService, public SwitchGlyphiconsService: SwitchGlyphiconsService,
   public LoadingService: LoadingService, public ErrorService: ErrorService) {};

  edtSuiviData: object = {};


  public getEdtSuiviData(): Object {
    this.EdtSuiviService.getEdtSuiviInfos()
      .then(edtSuiviData => this.edtSuiviData = Object.assign({}, edtSuiviData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.edtSuiviData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.edtSuiviData
  }

  load(): void {

    this.LoadingService.loadingTrue();

    this.getEdtSuiviData();
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }


}