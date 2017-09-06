import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-gesmag-versions',
  templateUrl: './gesmag-versions.component.html',
  styleUrls: ['./gesmag-versions.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class GesmagVersionsComponent {

    @Input() gesmagEnv: string;
  
    constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
    private ErrorService: ErrorService) { }
  
    private gesmagVersionsUrl: string = 'assets/json/mocks/urlConnection/url.json';
    public gesmagVersionData: Object = {};
  
  
    public getWebEdiVersionsData(): Object {
  
      this.ApiService.getData(this.gesmagVersionsUrl)
        .then(gesmagVersionData => this.gesmagVersionData = {...gesmagVersionData})
        .catch(error => this.gesmagVersionData = {error: this.ErrorService.getErrorMessage(error)})
        .then(() => this.LoadingService.loading = false);
  
      return this.gesmagVersionData;
  
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
