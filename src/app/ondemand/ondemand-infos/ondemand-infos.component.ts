import { Component, OnInit } from '@angular/core';
import { OnDemandInfosService } from './ondemand-infos.service';
import { LoadingService } from './../../loading.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-ondemand-infos',
  templateUrl: './ondemand-infos.component.html',
  styleUrls: ['./ondemand-infos.component.css'],
  providers: [OnDemandInfosService, LoadingService, ErrorService]
})
export class OndemandInfosComponent implements OnInit {

  constructor(private OnDemandInfosService: OnDemandInfosService, public LoadingService: LoadingService, public ErrorService: ErrorService) {

  }

  public OnDemandInfosData: object = {};


  public getOnDemandInfosData(): Object {

    this.OnDemandInfosService.getOnDemandInfos()
      .then(OnDemandInfosData => this.OnDemandInfosData = Object.assign({}, OnDemandInfosData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.OnDemandInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.OnDemandInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getOnDemandInfosData()
  }

}
