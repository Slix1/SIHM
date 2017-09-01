import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-edtdisk',
  templateUrl: './edt-disk.component.html',
  styleUrls: ['./edt-disk.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtdiskComponent {


  constructor(public ApiService: ApiService, public SwitchGlyphiconsService: SwitchGlyphiconsService, public LoadingService: LoadingService,
   public ErrorService: ErrorService) {

  }

  private edtDiskUrl: string = 'assets/json/mocks/sshConnection/edt.json';
  public edtDiskData: object = {};


  public getEdtDiskData(): Object {
    this.ApiService.getData(this.edtDiskUrl)
      .then(edtDiskData => this.edtDiskData = Object.assign({}, edtDiskData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.edtDiskData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.edtDiskData
  }


  load(): void {

    this.LoadingService.loadingTrue();

    this.getEdtDiskData();
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }

}
