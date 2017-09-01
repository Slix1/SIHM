import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-edt-sql',
  templateUrl: './edt-sql.component.html',
  styleUrls: ['./edt-sql.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtSqlComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  private edtSqlUrl: string = 'assets/json/mocks/sshConnection/edt.json';
  public edtSqlData: object = {};


  public getEdtSqlData(): Object {
    this.ApiService.getData(this.edtSqlUrl)
      .then(edtSqlData => this.edtSqlData = Object.assign({}, edtSqlData))
      .catch(error => this.edtSqlData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.edtSqlData
  }

  load(): void {

    this.LoadingService.loadingTrue();

    this.getEdtSqlData();
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }

}
