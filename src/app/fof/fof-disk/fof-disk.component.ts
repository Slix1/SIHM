import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-fofdisk',
  templateUrl: './fof-disk.component.html',
  styleUrls: ['./fof-disk.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class FofdiskComponent {

  constructor(public ApiService: ApiService, public SwitchGlyphiconsService: SwitchGlyphiconsService, public LoadingService: LoadingService,
  public ErrorService: ErrorService) {

  }

  private fofDiskUrl: string = 'assets/json/mocks/sshConnection/fof.json';
  public fofDiskData: object = {};


  public getFofDiskData(): Object {
    this.ApiService.getData(this.fofDiskUrl)
      .then(fofDiskData => this.fofDiskData = Object.assign({}, fofDiskData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.fofDiskData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.fofDiskData
  }


  load(): void {

    this.LoadingService.loadingTrue();

    this.getFofDiskData();
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }
}