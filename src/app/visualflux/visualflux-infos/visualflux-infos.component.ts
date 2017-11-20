import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-visualflux-infos',
  templateUrl: './visualflux-infos.component.html',
  styleUrls: ['./visualflux-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})
export class VisualfluxInfosComponent implements OnInit {

  constructor(private ApiService: ApiService, private LoadingService: LoadingService, private ErrorService: ErrorService) { }

  @Input() tab :string;
  private visualFluxInfosUrl: string;
  public visualFluxInfosData: object = {};


  public getVisualFluxInfosData(): Object {

    this.ApiService.getData(this.visualFluxInfosUrl)
      .then(visualFluxInfosData => this.visualFluxInfosData = {...visualFluxInfosData})
      .catch(error => this.visualFluxInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading['visualFluxInfos'] = false);

    return this.visualFluxInfosData;
  }

  ngOnInit(): void {

    this.visualFluxInfosUrl = apiUrl + this.tab + '/infos';
    this.LoadingService.loadingTrue('visualFluxInfos');

    this.getVisualFluxInfosData()
  }

}