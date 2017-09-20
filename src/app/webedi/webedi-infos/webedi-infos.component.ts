import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';


@Component({
  selector: 'app-webedi-infos',
  templateUrl: './webedi-infos.component.html',
  styleUrls: ['./webedi-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})
export class WebediInfosComponent implements OnInit {

  constructor(private ApiService: ApiService, private LoadingService: LoadingService, private ErrorService: ErrorService) { }

  @Input() tab: string;

  private webEdiInfosUrl: string;
  public webEdiInfosData: object = {};


  public getWebEdiInfosData(): Object {


    this.ApiService.getData(this.webEdiInfosUrl)
      .then(webEdiInfosData => this.webEdiInfosData = {...webEdiInfosData})
      .catch(error => this.webEdiInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading['webEdiInfos'] = false);

    return this.webEdiInfosData;
  }



  ngOnInit(): void {
    this.webEdiInfosUrl = 'assets/json/mocks/jsonFileConnection/'+this.tab+'.json';
    // this.webEdiInfosUrl = apiUrl + this.tab + '/infos';
    this.LoadingService.loadingTrue('webEdiInfos');
    this.getWebEdiInfosData();
  }

}
