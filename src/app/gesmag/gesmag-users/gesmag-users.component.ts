import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-gesmag-users',
  templateUrl: './gesmag-users.component.html',
  styleUrls: ['./gesmag-users.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class GesmagUsersComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  @Input() tab: string;
  private gesmagUsersUrl: string;
  public gesmagUsersData: object = {};

  
  public getGesmagUserUsersData(): Object {

    return this.ApiService.getData(this.gesmagUsersUrl)
      .then(gesmagUsers => this.gesmagUsersData = {...gesmagUsers})
      .catch(error => this.gesmagUsersData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading['gesmagUsers'] = false);
  }


  load(): void {

    this.gesmagUsersUrl = apiUrl + this.tab + '/users';
       
    this.LoadingService.loadingTrue('gesmagUsers');

    this.getGesmagUserUsersData();

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
