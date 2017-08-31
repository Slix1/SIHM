import { Component, OnInit } from '@angular/core';
import { WebEdiInfosService } from './webedi-infos.service';
import { LoadingService } from './../../loading.service';
import { ErrorService } from './../../error.service';


@Component({
  selector: 'app-webedi-infos',
  templateUrl: './webedi-infos.component.html',
  styleUrls: ['./webedi-infos.component.css'],
  providers: [WebEdiInfosService, LoadingService, ErrorService]
})
export class WebediInfosComponent implements OnInit {

  constructor(private WebEdiInfosService: WebEdiInfosService, public LoadingService: LoadingService, public ErrorService: ErrorService) {

  }

  public WebEdiInfosData: object = {};


  public getWebEdiInfosData(): Object {


    this.WebEdiInfosService.getWebEdiInfos()
      .then(WebEdiInfosData => this.WebEdiInfosData = Object.assign({}, WebEdiInfosData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.WebEdiInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.WebEdiInfosData;
  }



  ngOnInit(): void {
    this.LoadingService.loadingTrue();
    this.getWebEdiInfosData();
  }

}
