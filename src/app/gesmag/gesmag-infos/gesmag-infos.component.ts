import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';


@Component({
  selector: 'app-gesmag-infos',
  templateUrl: './gesmag-infos.component.html',
  styleUrls: ['./gesmag-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})
export class GesmagInfosComponent implements OnInit {

  constructor(private ApiService: ApiService, private LoadingService: LoadingService, private ErrorService: ErrorService) { }

  @Input() tab :string;
  private gesmagInfosUrl: string;
  public gesmagInfosData: Object = {};


  public getGesmagInfosData(): Object {

    this.ApiService.getData(this.gesmagInfosUrl)
      .then(gesmagInfosData => this.gesmagInfosData = {...gesmagInfosData})
      .catch(error => this.gesmagInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading['gesmagInfos'] = false);

    return this.gesmagInfosData;
  }

  ngOnInit(): void {

    this.gesmagInfosUrl = apiUrl + this.tab + '/infos';
    this.LoadingService.loadingTrue('gesmagInfos');

    this.getGesmagInfosData()
  }

}