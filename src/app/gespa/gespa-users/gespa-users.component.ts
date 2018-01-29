import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-gespa-users',
  templateUrl: './gespa-users.component.html',
  styleUrls: ['./gespa-users.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class GespaUsersComponent {

  constructor(private ApiService: ApiService, public SwitchGlyphiconsService: SwitchGlyphiconsService, public LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  @Input() tab: string;
  private gespaUsersUrl: string;
  public gespaUsersData: object = {};



  public getGespaUserUsersData(): Object {

    return this.ApiService.getData(this.gespaUsersUrl)
      .then(gespaUsers => this.gespaUsersData = {...gespaUsers})
      .catch(error => this.gespaUsersData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading['gespaUsers'] = false);
  }


  load(): void {

    this.gespaUsersUrl = apiUrl + this.tab + '/users';

    this.LoadingService.loadingTrue('gespaUsers');

    this.getGespaUserUsersData();
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