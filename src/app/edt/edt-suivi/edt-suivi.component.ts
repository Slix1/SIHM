import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-edt-suivi',
  templateUrl: './edt-suivi.component.html',
  styleUrls: ['./edt-suivi.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtSuiviComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  private edtSuiviUrl: string = 'a';
  public edtSuiviData: object = {};


  public getEdtSuiviData(): Object {
    this.ApiService.getData(this.edtSuiviUrl)
      .then(edtSuiviData => this.edtSuiviData = {...edtSuiviData})
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