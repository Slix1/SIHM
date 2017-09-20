import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-ondemand-infos',
  templateUrl: './ondemand-infos.component.html',
  styleUrls: ['./ondemand-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})
export class OndemandInfosComponent implements OnInit {

  constructor(private ApiService: ApiService, private LoadingService: LoadingService, private ErrorService: ErrorService) { }

  @Input() tab :string;
  private onDemandInfosUrl: string;
  public onDemandInfosData: object = {};


  public getOnDemandInfosData(): Object {

    this.ApiService.getData(this.onDemandInfosUrl)
      .then(onDemandInfosData => this.onDemandInfosData = {...onDemandInfosData})
      .catch(error => this.onDemandInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading['onDemandInfos'] = false);

    return this.onDemandInfosData;
  }

  ngOnInit(): void {

    this.onDemandInfosUrl = 'assets/json/mocks/jsonFileConnection/'+this.tab+'.json';
    // this.onDemandInfosUrl = apiUrl + this.tab + '/infos';
    this.LoadingService.loadingTrue('onDemandInfos');

    this.getOnDemandInfosData()
  }

}
