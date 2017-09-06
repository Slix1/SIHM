import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-webedi-versions',
  templateUrl: './webedi-versions.component.html',
  styleUrls: ['./webedi-versions.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class WebediVersionsComponent {

  @Input() webediEnv: string;

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  private webEdiVersionsUrl: string = 'assets/json/mocks/urlConnection/url.json';
  public webEdiVersionData: Object = {};


  public getWebEdiVersionsData(): Object {

    this.ApiService.getData(this.webEdiVersionsUrl)
      .then(webEdiVersionData => this.webEdiVersionData = {...webEdiVersionData})
      .catch(error => this.webEdiVersionData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.webEdiVersionData;

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
