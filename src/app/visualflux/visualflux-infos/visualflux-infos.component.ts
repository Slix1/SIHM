import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-visualflux-infos',
  templateUrl: './visualflux-infos.component.html',
  styleUrls: ['./visualflux-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})
export class VisualfluxInfosComponent implements OnInit {

  constructor(private ApiService: ApiService, private LoadingService: LoadingService, private ErrorService: ErrorService) { }

  // private visualFluxInfosUrl: string = 'assets/json/mocks/jsonFileConnection/visualflux.json';
  private visualFluxInfosUrl: string = 'api/visualflux/infos';
  
  public visualFluxInfosData: object = {};


  public getVisualFluxInfosData(): Object {

    this.ApiService.getData(this.visualFluxInfosUrl)
      .then(visualFluxInfosData => this.visualFluxInfosData = {...visualFluxInfosData})
      .catch(error => this.visualFluxInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.visualFluxInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getVisualFluxInfosData()
  }

}
