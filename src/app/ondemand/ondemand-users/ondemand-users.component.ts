import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-ondemand-users',
  templateUrl: './ondemand-users.component.html',
  styleUrls: ['./ondemand-users.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class OndemandUsersComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  // private onDemandUsersUrl: string = 'assets/json/mocks/ldapConnection/TESTONDEMAND.json';
  private onDemandUsersUrl: string = 'api/ondemand/users';
  
  public onDemandUsersData: object = {};



  public getOnDemandUserUsersData(): Object {

    return this.ApiService.getData(this.onDemandUsersUrl)
      .then(onDemandUsers => this.onDemandUsersData = {...onDemandUsers})
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
