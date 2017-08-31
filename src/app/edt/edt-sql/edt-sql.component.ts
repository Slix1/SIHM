import { Component } from '@angular/core';
import { EdtSqlService } from './edt-sql.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-edt-sql',
  templateUrl: './edt-sql.component.html',
  styleUrls: ['./edt-sql.component.css'],
  providers: [EdtSqlService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtSqlComponent {

  constructor(public EdtSqlService: EdtSqlService, public SwitchGlyphiconsService: SwitchGlyphiconsService,
   public LoadingService: LoadingService, public ErrorService: ErrorService) {

  };

  edtSqlData: object = {};


  public getEdtSqlData(): Object {
    this.EdtSqlService.getEdtSqlInfos()
      .then(edtSqlData => this.edtSqlData = Object.assign({}, edtSqlData))
      .then(() => this.LoadingService.loading = false)
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
