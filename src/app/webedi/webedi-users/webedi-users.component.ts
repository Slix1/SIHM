import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-webedi-users',
  templateUrl: './webedi-users.component.html',
  styleUrls: ['./webedi-users.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class WebediUsersComponent {

  constructor(private ApiService: ApiService, public LoadingService: LoadingService, public SwitchGlyphiconsService: SwitchGlyphiconsService,
  public ErrorService: ErrorService) {

  }

  private webediUsersUrl: string = 'assets/json/mocks/ldapConnection/TESTWEBEDI.json';
  public webediUsersData: object = {};



  public getWebEdiUsersData(): Object {

    return this.ApiService.getData(this.webediUsersUrl)
      .then(webediUsers => this.webediUsersData = Object.assign({}, webediUsers))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.webediUsersData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);
  }


  load(): void {


    this.LoadingService.loadingTrue();

    this.getWebEdiUsersData();
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }

}
