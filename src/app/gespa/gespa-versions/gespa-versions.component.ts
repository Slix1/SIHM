import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';


@Component({
  selector: 'app-gespa-versions',
  templateUrl: './gespa-versions.component.html',
  styleUrls: ['./gespa-versions.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class GespaVersionsComponent {

    @Input() gespaEnv: string;
  
    constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
    private ErrorService: ErrorService) { }
  
    private gespaVersionsUrl: string = 'assets/json/mocks/urlConnection/url.json';
    public gespaVersionData: Object = {};
  
  
    public getWebEdiVersionsData(): Object {
  
      this.ApiService.getData(this.gespaVersionsUrl)
        .then(gespaVersionData => this.gespaVersionData = {...gespaVersionData})
        .catch(error => this.gespaVersionData = {error: this.ErrorService.getErrorMessage(error)})
        .then(() => this.LoadingService.loading = false);
  
      return this.gespaVersionData;
  
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
