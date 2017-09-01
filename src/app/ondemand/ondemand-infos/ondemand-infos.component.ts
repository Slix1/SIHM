import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-ondemand-infos',
  templateUrl: './ondemand-infos.component.html',
  styleUrls: ['./ondemand-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})
export class OndemandInfosComponent implements OnInit {

  constructor(private ApiService: ApiService, public LoadingService: LoadingService, public ErrorService: ErrorService) {

  }

  private onDemandInfosUrl: string = 'assets/json/mocks/jsonFileConnection/ondemand.json';
  public onDemandInfosData: object = {};


  public getOnDemandInfosData(): Object {

    this.ApiService.getData(this.onDemandInfosUrl)
      .then(onDemandInfosData => this.onDemandInfosData = Object.assign({}, onDemandInfosData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.onDemandInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.onDemandInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getOnDemandInfosData()
  }

}
