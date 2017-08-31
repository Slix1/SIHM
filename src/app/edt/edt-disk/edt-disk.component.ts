import { Component } from '@angular/core';
import { EdtDiskService } from './edt-disk.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-edtdisk',
  templateUrl: './edt-disk.component.html',
  styleUrls: ['./edt-disk.component.css'],
  providers: [EdtDiskService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class EdtdiskComponent {


  constructor(public EdtDiskService: EdtDiskService, public SwitchGlyphiconsService: SwitchGlyphiconsService, public LoadingService: LoadingService,
   public ErrorService: ErrorService) {

  }

  edtDiskData: object = {};


  public getEdtDiskData(): Object {
    this.EdtDiskService.getEdtDiskInfos()
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
