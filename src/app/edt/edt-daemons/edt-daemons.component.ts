import { Component } from '@angular/core';
import { EdtDaemonsService } from './edt-daemons.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-edt-daemons',
  templateUrl: './edt-daemons.component.html',
  styleUrls: ['./edt-daemons.component.css'],
  providers: [EdtDaemonsService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtDaemonsComponent {

  constructor(public EdtDaemonsService: EdtDaemonsService, public SwitchGlyphiconsService: SwitchGlyphiconsService,
   public LoadingService: LoadingService, public ErrorService: ErrorService) {};

  edtDaemonsData: object = {};


  public getEdtDaemonsData(): Object {
    this.EdtDaemonsService.getEdtDaemonsInfos()
      .then(edtDaemonsData => this.edtDaemonsData = Object.assign({}, edtDaemonsData))
      .then(() => this.LoadingService.loading = false)
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
