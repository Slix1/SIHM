import { Component, Input } from '@angular/core';
import { WebEdiVersionsService } from './webedi-versions.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-webedi-versions',
  templateUrl: './webedi-versions.component.html',
  styleUrls: ['./webedi-versions.component.css'],
  providers: [WebEdiVersionsService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class WebediVersionsComponent {

  @Input() webediEnv: string;

  constructor(private WebEdiVersionsService: WebEdiVersionsService, public LoadingService: LoadingService, public SwitchGlyphiconsService: SwitchGlyphiconsService,
  public ErrorService: ErrorService) {

  }

  public WebEdiVersionData: Object = {};


  public getWebEdiVersionsData(): Object {

    this.WebEdiVersionsService.getWebEdiVersions()
      .then(WebEdiVersionData => this.WebEdiVersionData = Object.assign({}, WebEdiVersionData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.WebEdiVersionData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.WebEdiVersionData;

  }


  load(): void {

    this.LoadingService.loadingTrue();

    this.getWebEdiVersionsData();

  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }

}
