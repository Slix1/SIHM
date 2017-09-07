import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-edtinfos',
  templateUrl: './edt-infos.component.html',
  styleUrls: ['./edt-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})



export class EdtinfosComponent {

  constructor(private ApiService: ApiService, private LoadingService: LoadingService, private ErrorService: ErrorService) { }

  // private EdtInfosDataUrl: string = 'assets/json/mocks/jsonFileConnection/edt.json';
  private EdtInfosDataUrl: string = '/api/edt/infos';
  public EdtInfosData: Object = {};


  public getEdtInfosData(): Object {

    this.ApiService.getData(this.EdtInfosDataUrl)
      .then(EdtInfosData => this.EdtInfosData = {...EdtInfosData})
      .catch(error => this.EdtInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);
      
    return this.EdtInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getEdtInfosData()
  }

}
