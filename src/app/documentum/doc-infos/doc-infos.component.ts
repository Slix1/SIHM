import { Component, OnInit } from '@angular/core';
import { DocumentumInfosService } from './doc-infos.service';
import { LoadingService } from './../../loading.service';
import { ErrorService } from './../../error.service';

@Component({
  selector: 'app-docinfos',
  templateUrl: './doc-infos.component.html',
  styleUrls: ['./doc-infos.component.css'],
  providers: [DocumentumInfosService, LoadingService, ErrorService]
})
export class DocinfosComponent implements OnInit {

  constructor(private DocumentumInfosService: DocumentumInfosService, public LoadingService: LoadingService,
  public ErrorService: ErrorService) {

  }

  public DocumentumInfosData: Object = {};


  public getDocumentumInfosData(): Object {

    return this.DocumentumInfosService.getDocumentumInfos()
      .then(DocumentumInfos => this.DocumentumInfosData = Object.assign({}, DocumentumInfos))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.DocumentumInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getDocumentumInfosData()
  }

}
