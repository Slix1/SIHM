import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';


@Component({
  selector: 'app-webedi-infos',
  templateUrl: './webedi-infos.component.html',
  styleUrls: ['./webedi-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})
export class WebediInfosComponent implements OnInit {

  constructor(private ApiService: ApiService, private LoadingService: LoadingService, private ErrorService: ErrorService) { }

  // private webEdiInfosUrl: string = 'assets/json/mocks/jsonFileConnection/webedi.json';
  private webEdiInfosUrl: string = 'api/webedi/infos';
  
  public webEdiInfosData: object = {};


  public getWebEdiInfosData(): Object {


    this.ApiService.getData(this.webEdiInfosUrl)
      .then(webEdiInfosData => this.webEdiInfosData = {...webEdiInfosData})
      .catch(error => this.webEdiInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.webEdiInfosData;
  }



  ngOnInit(): void {
    this.LoadingService.loadingTrue();
    this.getWebEdiInfosData();
  }

}
