import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-gesmag-users',
  templateUrl: './gesmag-users.component.html',
  styleUrls: ['./gesmag-users.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class GesmagUsersComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  private gesmagUsersUrl: string = 'assets/japConnection/TESTGESMAG.json';
  public gesmagUsersData: object = {};



  public getGesmagUserUsersData(): Object {

    return this.ApiService.getData(this.gesmagUsersUrl)
      .then(gesmagUsers => this.gesmagUsersData = Object.assign({}, gesmagUsers))
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
