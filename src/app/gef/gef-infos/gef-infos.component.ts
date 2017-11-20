import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-gef-infos',
  templateUrl: './gef-infos.component.html',
  styleUrls: ['./gef-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})
export class GefInfosComponent implements OnInit {

  constructor(private ApiService: ApiService, private LoadingService: LoadingService, private ErrorService: ErrorService) { }

  @Input() tab :string;
  private gefInfosUrl: string;
  public gefInfosData: Object = {};


  public getGefInfosData(): Object {

    this.ApiService.getData(this.gefInfosUrl)
      .then(GefInfosData => this.gefInfosData = {...GefInfosData})
      .catch(error => this.gefInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading['gefInfos'] = false);

    return this.gefInfosData;
  }

  ngOnInit(): void {

    this.gefInfosUrl = apiUrl + this.tab + '/infos';
    this.LoadingService.loadingTrue('gefInfos');

    this.getGefInfosData()
  }

}