import { Component } from '@angular/core';
import { OnDemandUsersService } from './ondemand-users.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-ondemand-users',
  templateUrl: './ondemand-users.component.html',
  styleUrls: ['./ondemand-users.component.css'],
  providers: [OnDemandUsersService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class OndemandUsersComponent {

  constructor(private OnDemandUsersService: OnDemandUsersService, public LoadingService: LoadingService, public SwitchGlyphiconsService: SwitchGlyphiconsService,
  public ErrorService: ErrorService) {

  }

  public onDemandUsersData: object = {};



  public getOnDemandUserUsersData(): Object {

    return this.OnDemandUsersService.getOnDemandUsers()
      .then(onDemandUsers => this.onDemandUsersData = Object.assign({}, onDemandUsers))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.onDemandUsersData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);
  }


  load(): void {


    this.LoadingService.loadingTrue();

    this.getOnDemandUserUsersData();
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }

}
