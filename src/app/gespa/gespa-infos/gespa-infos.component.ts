import { Component, OnInit } from '@angular/core';
import { GespaInfosService } from './gespa-infos.service';
import { LoadingService } from './../../loading.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-gespa-infos',
  templateUrl: './gespa-infos.component.html',
  styleUrls: ['./gespa-infos.component.css'],
  providers: [GespaInfosService, LoadingService, ErrorService]
})



export class GespaInfosComponent {

  constructor(private GespaInfosService: GespaInfosService, public LoadingService: LoadingService, public ErrorService: ErrorService) {

  }

  public gespaInfosData: object = {};

  public getGespaInfosData(): Object {

    this.GespaInfosService.getGespaInfos()
      .then(gespaInfosData => this.gespaInfosData = Object.assign({}, gespaInfosData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.gespaInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.gespaInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getGespaInfosData()
  }

}
