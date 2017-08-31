import { Component } from '@angular/core';
import { VisualFluxUsersService } from './visualflux-users.service';
import { LoadingService } from './../../loading.service';
import { SwitchGlyphiconsService } from './../../switchglyphicons.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-visualflux-users',
  templateUrl: './visualflux-users.component.html',
  styleUrls: ['./visualflux-users.component.css'],
  providers: [VisualFluxUsersService, LoadingService, SwitchGlyphiconsService, ErrorService]
})
export class VisualfluxUsersComponent {

  constructor(private VisualFluxUsersService: VisualFluxUsersService, public LoadingService: LoadingService, public SwitchGlyphiconsService: SwitchGlyphiconsService,
  public ErrorService: ErrorService) {

  }

  public VisualFluxUsersData: object = {};



  public getVisualFluxUserUsersData(): Object {

    return this.VisualFluxUsersService.getVisualFluxUsers()
      .then(visualFluxUsers => this.VisualFluxUsersData = Object.assign({}, visualFluxUsers))
      .then(() => this.LoadingService.loading = false)
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
