import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-gef-infos',
  templateUrl: './gef-infos.component.html',
  styleUrls: ['./gef-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})
export class GefInfosComponent implements OnInit {

  constructor(private ApiService: ApiService, public LoadingService: LoadingService, public ErrorService: ErrorService) {

  }

  private gefInfosUrl: string = 'assets/json/mocks/jsonFileConnection/gef.json';
  public gefInfosData: Object = {};


  public getGefInfosData(): Object {

    this.ApiService.getData(this.gefInfosUrl)
      .then(GefInfosData => this.gefInfosData = Object.assign({}, GefInfosData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.gefInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.gefInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getGefInfosData()
  }

}
