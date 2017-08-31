import { Component, Input } from '@angular/core';
import { EdtBdocService } from './edt-bdoc.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';




@Component({
  selector: 'app-edtbdoc',
  templateUrl: './edt-bdoc.component.html',
  styleUrls: ['./edt-bdoc.component.css'],
  providers: [EdtBdocService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtbdocComponent {


  constructor(public EdtBdocService: EdtBdocService, public SwitchGlyphiconsService: SwitchGlyphiconsService, public LoadingService: LoadingService,
  public ErrorService: ErrorService) {

  }

  edtBdocData: object = {};


  public getEdtBdocData(): Object {
    this.EdtBdocService.getEdtBdocInfos()
      .then(edtBdocData => this.edtBdocData = Object.assign({}, edtBdocData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.edtBdocData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.edtBdocData
  }


  load(): void {

    this.LoadingService.loadingTrue();

    this.getEdtBdocData();
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }

}
