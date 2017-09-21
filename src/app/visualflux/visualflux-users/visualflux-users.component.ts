import { Component, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { SwitchGlyphiconsService } from './../../services/switchglyphicons.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-visualflux-users',
  templateUrl: './visualflux-users.component.html',
  styleUrls: ['./visualflux-users.component.css'],
  providers: [ApiService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class VisualfluxUsersComponent {

  constructor(private ApiService: ApiService, private SwitchGlyphiconsService: SwitchGlyphiconsService, private LoadingService: LoadingService,
  private ErrorService: ErrorService) { }

  @Input() tab: string;
  private visualFluxUsersUrl: string;
  public VisualFluxUsersData: object = {};

  public getVisualFluxUserUsersData(): Object {

    return this.ApiService.getData(this.visualFluxUsersUrl)
      .then(visualFluxUsers => this.VisualFluxUsersData = {...visualFluxUsers})
      .catch(error => this.VisualFluxUsersData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading['visualFluxUsers'] = false);
  }

  load(): void {

    this.visualFluxUsersUrl = apiUrl + this.tab + '/users';
    
    this.LoadingService.loadingTrue('visualFluxUsers');

    this.getVisualFluxUserUsersData();
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
