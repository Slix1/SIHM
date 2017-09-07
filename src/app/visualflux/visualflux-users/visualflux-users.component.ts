import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-visualflux-users',
  templateUrl: './visualflux-users.component.html',
  styleUrls: ['./visualflux-users.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class VisualfluxUsersComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  // private visualFluxUsersUrl: string = 'assets/json/mocks/ldapConnection/TESTVISUALFLUX.json';
  private visualFluxUsersUrl: string = 'api/visualflux/users';
  
  public VisualFluxUsersData: object = {};



  public getVisualFluxUserUsersData(): Object {

    return this.ApiService.getData(this.visualFluxUsersUrl)
      .then(visualFluxUsers => this.VisualFluxUsersData = {...visualFluxUsers})
      .catch(error => this.VisualFluxUsersData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);
  }


  load(): void {


    this.LoadingService.loadingTrue();

    this.getVisualFluxUserUsersData();
  }

  refresh(): void {
    this.load();
  }

  switch(): void {
    this.SwitchGlyphiconsService.switchGlyphicon();
  }

}
