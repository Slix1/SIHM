import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';
import { apiUrl } from './../../constants/api-url.constant';

@Component({
  selector: 'app-docinfos',
  templateUrl: './doc-infos.component.html',
  styleUrls: ['./doc-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})
export class DocinfosComponent implements OnInit {

  constructor(private ApiService: ApiService, public LoadingService: LoadingService, private ErrorService: ErrorService) { }

  @Input() tab :string;
  private documentumInfosUrl: string;
  public documentumInfosData: Object = {};


  public getDocumentumInfosData(): Object {

    return this.ApiService.getData(this.documentumInfosUrl)
      .then(documentumInfos => this.documentumInfosData = {...documentumInfos})
      .catch(error => this.documentumInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading['documentumInfos'] = false);

  }

  ngOnInit(): void {

    this.documentumInfosUrl = apiUrl + this.tab + '/infos';
    this.LoadingService.loadingTrue('documentumInfos');
    this.getDocumentumInfosData();
  }

}