import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-gespa-infos',
  templateUrl: './gespa-infos.component.html',
  styleUrls: ['./gespa-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})



export class GespaInfosComponent {

  constructor(private ApiService: ApiService, private LoadingService: LoadingService, private ErrorService: ErrorService) { }

  @Input() tab :string;
  private gespaInfosUrl: string;
  public gespaInfosData: object = {};

  public getGespaInfosData(): Object {

    this.ApiService.getData(this.gespaInfosUrl)
      .then(gespaInfosData => this.gespaInfosData = {...gespaInfosData})
      .catch(error => this.gespaInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading['gespaInfos'] = false);

    return this.gespaInfosData;
  }

  ngOnInit(): void {

    this.gespaInfosUrl = apiUrl + this.tab + '/infos';
    this.LoadingService.loadingTrue('gespaInfos');

    this.getGespaInfosData()
  }

}