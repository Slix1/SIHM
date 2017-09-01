import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-gespa-infos',
  templateUrl: './gespa-infos.component.html',
  styleUrls: ['./gespa-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})



export class GespaInfosComponent {

  constructor(private ApiService: ApiService, public LoadingService: LoadingService, public ErrorService: ErrorService) {

  }

  private gespaInfosUrl: string = 'assets/json/mocks/jsonFileConnection/gespa.json';
  public gespaInfosData: object = {};

  public getGespaInfosData(): Object {

    this.ApiService.getData(this.gespaInfosUrl)
      .then(gespaInfosData => this.gespaInfosData = Object.assign({}, gespaInfosData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.gespaInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.gespaInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getGespaInfosData()
  }

}
