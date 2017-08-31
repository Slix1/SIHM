import { Component } from '@angular/core';
import { FofDiskService } from './fof-disk.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-fofdisk',
  templateUrl: './fof-disk.component.html',
  styleUrls: ['./fof-disk.component.css'],
  providers: [FofDiskService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class FofdiskComponent {

  constructor(public FofDiskService: FofDiskService, public SwitchGlyphiconsService: SwitchGlyphiconsService, public LoadingService: LoadingService,
  public ErrorService: ErrorService) {

  }

  fofDiskData: object = {};


  public getFofDiskData(): Object {
    this.FofDiskService.getFofDiskInfos()
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