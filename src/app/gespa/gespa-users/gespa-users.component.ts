import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-gespa-users',
  templateUrl: './gespa-users.component.html',
  styleUrls: ['./gespa-users.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class GespaUsersComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  private gespaUsersUrl: string = 'assets/json/mocks/ldapConnection/TESTGESPA.json';
  public gespaUsersData: object = {};



  public getGespaUserUsersData(): Object {

    return this.ApiService.getData(this.gespaUsersUrl)
      .then(gespaUsers => this.gespaUsersData = Object.assign({}, gespaUsers))
      .catch(error => this.gespaUsersData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);
  }


  load(): void {


    this.LoadingService.loadingTrue();

    this.getGespaUserUsersData();
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }


}
