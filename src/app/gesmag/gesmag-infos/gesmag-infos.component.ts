import { Component, OnInit } from '@angular/core';
import { GesmagInfosService } from './gesmag-infos.service';
import { LoadingService } from './../../loading.service';
import { ErrorService } from './../../error.service';


@Component({
  selector: 'app-gesmag-infos',
  templateUrl: './gesmag-infos.component.html',
  styleUrls: ['./gesmag-infos.component.css'],
  providers: [GesmagInfosService, LoadingService, ErrorService]
})
export class GesmagInfosComponent implements OnInit {

  constructor(private GesmagInfosService: GesmagInfosService, public LoadingService: LoadingService, public ErrorService: ErrorService) {

  }

  public GesmagInfosData: Object = {};


  public getGesmagInfosData(): Object {

    this.GesmagInfosService.getGesmagInfos()
      .then(GesmagInfosData => this.GesmagInfosData = Object.assign({}, GesmagInfosData))
      .then(() => this.LoadingService.loading = false)
      .catch(error => this.GesmagInfosData = {error: this.ErrorService.getErrorMessage(error)})
      .then(() => this.LoadingService.loading = false);

    return this.GesmagInfosData;
  }

  ngOnInit(): void {

    this.LoadingService.loadingTrue();

    this.getGesmagInfosData()
  }

}
