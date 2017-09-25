import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-webedi-users',
  templateUrl: './webedi-users.component.html',
  styleUrls: ['./webedi-users.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class WebediUsersComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  @Input() tab: string;
  private webediUsersUrl: string;
  public webediUsersData: object = {};


  public getWebEdiUsersData(): Object {

    return this.ApiService.getData(this.webediUsersUrl)
      .then(webediUsers => this.webediUsersData = {...webediUsers})
      .catch(error => this.webediUsersData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading['webediUser'] = false);
  }


  load(): void {
    this.webediUsersUrl = apiUrl + this.tab + '/users';
    this.LoadingService.loadingTrue('webediUser');
    this.getWebEdiUsersData();
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
