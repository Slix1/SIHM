import { Component, OnInit } from '@angular/core';
import { GefInfosService } from './gef-infos.service';
import { LoadingService } from './../../loading.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-gef-infos',
  templateUrl: './gef-infos.component.html',
  styleUrls: ['./gef-infos.component.css'],
  providers: [GefInfosService, LoadingService, ErrorService]
})
export class GefInfosComponent implements OnInit {

  constructor(private GefInfosService: GefInfosService, public LoadingService: LoadingService, public ErrorService: ErrorService) {

  }

  public GefInfosData: Object = {};


  public getGefInfosData(): Object {

    this.GefInfosService.getGefInfos()
      .then(GefInfosData => this.GefInfosData = Object.assign({}, GefInfosData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.GefInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.GefInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getGefInfosData()
  }

}
