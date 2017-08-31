import { Component } from '@angular/core';
import { GespaUsersService } from './gespa-users.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-gespa-users',
  templateUrl: './gespa-users.component.html',
  styleUrls: ['./gespa-users.component.css'],
  providers: [GespaUsersService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class GespaUsersComponent {

  constructor(private GespaUsersService: GespaUsersService, public LoadingService: LoadingService, public SwitchGlyphiconsService: SwitchGlyphiconsService,
  public ErrorService: ErrorService) {

  }

  public gespaUsersData: object = {};



  public getGespaUserUsersData(): Object {

    return this.GespaUsersService.getGespaUsers()
      .then(gespaUsers => this.gespaUsersData = Object.assign({}, gespaUsers))
      .then(() => this.LoadingService.loading = false)
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
