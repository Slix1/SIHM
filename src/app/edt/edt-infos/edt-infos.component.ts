import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-edtinfos',
  templateUrl: './edt-infos.component.html',
  styleUrls: ['./edt-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})



export class EdtinfosComponent {

  constructor(private ApiService: ApiService, private LoadingService: LoadingService, private ErrorService: ErrorService) { }

  @Input() tab: object;
  private EdtInfosDataUrl: string;
  public EdtInfosData: Object = {};



  public getEdtInfosData(): Object {

    this.ApiService.getData(this.EdtInfosDataUrl)
      .then(EdtInfosData => this.EdtInfosData = {...EdtInfosData})
      .catch(error => this.EdtInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading['EdtInfos'] = false);
      
    return this.EdtInfosData;
  }

  ngOnInit(): void {
    this.EdtInfosDataUrl= apiUrl + this.tab + '/infos';
   
    this.LoadingService.loadingTrue('EdtInfos');

    this.getEdtInfosData()
  }

}
