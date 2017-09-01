import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';




@Component({
  selector: 'app-edtbdoc',
  templateUrl: './edt-bdoc.component.html',
  styleUrls: ['./edt-bdoc.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtbdocComponent {


  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  private edtBdocUrl: string = 'assets/json/mocks/jsonFileConnection/edt.json';
  public edtBdocData: object = {};


  public getEdtBdocData(): Object {
    this.ApiService.getData(this.edtBdocUrl)
      .then(edtBdocData => this.edtBdocData = Object.assign({}, edtBdocData))
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
