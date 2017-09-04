import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-edt-daemons',
  templateUrl: './edt-daemons.component.html',
  styleUrls: ['./edt-daemons.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtDaemonsComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }


  private edtDaemonsUrl: string = 'assets/json/edt.json';
  public edtDaemonsData: object = {};


  public getEdtDaemonsData(): Object {
    this.ApiService.getData(this.edtDaemonsUrl)
      .then(edtDaemonsData => this.edtDaemonsData = {...edtDaemonsData})
      .catch(error => this.edtDaemonsData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.edtDaemonsData
  }

  load(): void {

    this.LoadingService.loadingTrue();

    this.getEdtDaemonsData();
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }


}
