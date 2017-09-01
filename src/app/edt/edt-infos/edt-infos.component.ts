import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';


import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-edtinfos',
  templateUrl: './edt-infos.component.html',
  styleUrls: ['./edt-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})



export class EdtinfosComponent {

  constructor(private ApiService: ApiService, public LoadingService: LoadingService, public ErrorService: ErrorService) {

  }

  private EdtInfosDataUrl: string = 'assets/json/mocks/jsonFileConnection/edt.json';
  public EdtInfosData: Object = {};


  public getEdtInfosData(): Object {

    this.ApiService.getData(this.EdtInfosDataUrl)
      .then(EdtInfosData => this.EdtInfosData = Object.assign({}, EdtInfosData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.EdtInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);
      
    return this.EdtInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getEdtInfosData()
  }

}
