import { Component } from '@angular/core';
import { GesmagUsersService } from './gesmag-users.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-gesmag-users',
  templateUrl: './gesmag-users.component.html',
  styleUrls: ['./gesmag-users.component.css'],
  providers: [GesmagUsersService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class GesmagUsersComponent {

  constructor(private GesmagUsersService: GesmagUsersService, public LoadingService: LoadingService, public SwitchGlyphiconsService: SwitchGlyphiconsService,
  public ErrorService: ErrorService) {

  }

  public gesmagUsersData: object = {};



  public getGesmagUserUsersData(): Object {

    return this.GesmagUsersService.getGesmagUsers()
      .then(gesmagUsers => this.gesmagUsersData = Object.assign({}, gesmagUsers))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.gesmagUsersData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);
  }


  load(): void {


    this.LoadingService.loadingTrue();

    this.getGesmagUserUsersData();

  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }


}
