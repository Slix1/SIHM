import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-ondemand-versions',
  templateUrl: './ondemand-versions.component.html',
  styleUrls: ['./ondemand-versions.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class OndemandVersionsComponent {

    @Input() ondemandEnv: string;
  
    constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
    private ErrorService: ErrorService) { }
  
    private ondemandVersionsUrl: string = 'assets/json/mocks/urlConnection/url.json';
    public ondemandVersionData: Object = {};
  
  
    public getWebEdiVersionsData(): Object {
  
      this.ApiService.getData(this.ondemandVersionsUrl)
        .then(ondemandVersionData => this.ondemandVersionData = {...ondemandVersionData})
        .catch(error => this.ondemandVersionData = {error: this.ErrorService.getErrorMessage(error)})
        .then(() => this.LoadingService.loading = false);
  
      return this.ondemandVersionData;
  
    }
  
  
    load(): void {
  
      this.LoadingService.loadingTrue();
      console.log(this.ondemandEnv);
      
      this.getWebEdiVersionsData();
  
    }
  
    refresh(): void {
      this.load();
    }
  
    switch(): void {
      this.SwitchGlyphiconsService.switchGlyphicon();
    }
  
}
