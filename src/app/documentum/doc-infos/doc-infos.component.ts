import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { LoadingService } from './../../services/loading.service';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-docinfos',
  templateUrl: './doc-infos.component.html',
  styleUrls: ['./doc-infos.component.css'],
  providers: [ApiService, LoadingService, ErrorService]
})
export class DocinfosComponent implements OnInit {

  constructor(private ApiService: ApiService, private LoadingService: LoadingService, private ErrorService: ErrorService) { }


  // private DocumentumInfosUrl: string = 'assets/json/mocks/jsonFileConnection/documentum.json';
  private DocumentumInfosUrl: string = '/api/documentum/infos';
  
  public DocumentumInfosData: Object = {};


  public getDocumentumInfosData(): Object {

    return this.ApiService.getData(this.DocumentumInfosUrl)
      .then(DocumentumInfos => this.DocumentumInfosData = {...DocumentumInfos})
      .catch(error => this.DocumentumInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();
    this.getDocumentumInfosData();
  }

}
