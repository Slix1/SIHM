import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-ondemand-users',
  templateUrl: './ondemand-users.component.html',
  styleUrls: ['./ondemand-users.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class OndemandUsersComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  @Input() tab: string;
  private onDemandUsersUrl: string;
  public onDemandUsersData: object = {};



  public getOnDemandUserUsersData(): Object {

    return this.ApiService.getData(this.onDemandUsersUrl)
      .then(onDemandUsers => this.onDemandUsersData = {...onDemandUsers})
      .catch(error => this.onDemandUsersData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading['onDemandUsers'] = false);
  }


  load(): void {

    this.onDemandUsersUrl = apiUrl + this.tab + '/users';
    
    this.LoadingService.loadingTrue('onDemandUsers');

    this.getOnDemandUserUsersData();
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    if (this.SwitchGlyphiconsService.currentGlyphicon !== this.SwitchGlyphiconsService.minus) {
      this.load();
    }
    this.SwitchGlyphiconsService.switchGlyphicon();
  }

}