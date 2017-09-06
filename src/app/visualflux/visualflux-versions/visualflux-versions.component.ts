import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-visualflux-versions',
  templateUrl: './visualflux-versions.component.html',
  styleUrls: ['./visualflux-versions.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class VisualfluxVersionsComponent {

    @Input() visualfluxEnv: string;
  
    constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
    private ErrorService: ErrorService) { }
  
    private visualfluxVersionsUrl: string = 'assets/json/mocks/urlConnection/url.json';
    public visualfluxVersionData: Object = {};
  
  
    public getWebEdiVersionsData(): Object {
  
      this.ApiService.getData(this.visualfluxVersionsUrl)
        .then(visualfluxVersionData => this.visualfluxVersionData = {...visualfluxVersionData})
        .catch(error => this.visualfluxVersionData = {error: this.ErrorService.getErrorMessage(error)})
        .then(() => this.LoadingService.loading = false);
  
      return this.visualfluxVersionData;
  
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
