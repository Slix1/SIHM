import { Component, Input } from '@angular/core';
import { WebEdiUsersService } from './webedi-users.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-webedi-users',
  templateUrl: './webedi-users.component.html',
  styleUrls: ['./webedi-users.component.css'],
  providers: [WebEdiUsersService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class WebediUsersComponent {

  constructor(private WebEdiUsersService: WebEdiUsersService, public LoadingService: LoadingService, public SwitchGlyphiconsService: SwitchGlyphiconsService,
  public ErrorService: ErrorService) {

  }

  public WebediUsersData: object = {};



  public getWebEdiUsersData(): Object {

    return this.WebEdiUsersService.getWebEdiUsers()
      .then(webediUsers => this.WebediUsersData = Object.assign({}, webediUsers))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.WebediUsersData = {error: this.ErrorService.getErrorMessage(error)})
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
