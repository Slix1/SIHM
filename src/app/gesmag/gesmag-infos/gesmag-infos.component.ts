import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';


@Component({
  selector: 'app-gesmag-infos',
  templateUrl: './gesmag-infos.component.html',
  styleUrls: ['./gesmag-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})
export class GesmagInfosComponent implements OnInit {

  constructor(private ApiService: ApiService, public LoadingService: LoadingService, public ErrorService: ErrorService) {

  }

  private gesmagInfosUrl = 'assets/json/mocks/jsonFileConnection/gesmag.json';
  public gesmagInfosData: Object = {};


  public getGesmagInfosData(): Object {

    this.ApiService.getData(this.gesmagInfosUrl)
      .then(gesmagInfosData => this.gesmagInfosData = Object.assign({}, gesmagInfosData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.gesmagInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.gesmagInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getGesmagInfosData()
  }

}
