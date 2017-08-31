import { Component, OnInit } from '@angular/core';
import { VisualFluxInfosService } from './visualflux-infos.service';
import { LoadingService } from './../../loading.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-visualflux-infos',
  templateUrl: './visualflux-infos.component.html',
  styleUrls: ['./visualflux-infos.component.css'],
  providers: [VisualFluxInfosService, LoadingService, ErrorService]
})
export class VisualfluxInfosComponent implements OnInit {

  constructor(private VisualFluxInfosService: VisualFluxInfosService, public LoadingService: LoadingService, public ErrorService: ErrorService) {

  }

  public visualFluxInfosData: object = {};


  public getVisualFluxInfosData(): Object {

    this.VisualFluxInfosService.getVisualFluxInfos()
      .then(visualFluxInfosData => this.visualFluxInfosData = Object.assign({}, visualFluxInfosData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.visualFluxInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.visualFluxInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getVisualFluxInfosData()
  }

}
